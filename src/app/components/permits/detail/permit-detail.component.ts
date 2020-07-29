import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MultiPolygon } from 'geojson';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoJSONUtils } from 'soda-angular/utilities';
import { OdpContext } from 'src/app/models/edmonton-open-data/odp-context';
import { Permit } from 'src/app/models/permit/permit';
import { ReusableMapService } from '../map/reusable-map/reusable-map.service';

@Component({
  selector: 'app-permit-detail',
  templateUrl: './permit-detail.component.html',
  styleUrls: ['./permit-detail.component.scss']
})
export class PermitDetailComponent implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private mapService: ReusableMapService,
    private context: OdpContext,
    private dialogRef: MatDialogRef<PermitDetailComponent>,
    // tslint:disable-next-line: no-shadowed-variable
    @Inject(MAT_DIALOG_DATA) public Permit: Permit) {

    dialogRef.beforeClosed().subscribe(o => {
      this.mapService.detach(this.viewContainerRef);
    });
  }

  ngOnInit(): void {
    this.mapService.attach(this.viewContainerRef);
    this.mapService.setMarker(this.Permit.Latitude, this.Permit.Longitude);
    this.getShapes().subscribe(s => this.mapService.setShapes(s));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private getShapes(): Observable<MultiPolygon[]> {
    return forkJoin(
      this.context.legalParcels
        .geometry(p => p.geometry)
        .intersects(GeoJSONUtils.point(this.Permit.Longitude, this.Permit.Latitude))
        .observable(),
      this.context.titleParcels
        .geometry(p => p.geometry)
        .intersects(GeoJSONUtils.point(this.Permit.Longitude, this.Permit.Latitude))
        .observable()
    )
      .pipe(
        map(([x, y]) => [...x, ...y]),
        map(x => x.map(p => p.geometry))
      );
  }
}
