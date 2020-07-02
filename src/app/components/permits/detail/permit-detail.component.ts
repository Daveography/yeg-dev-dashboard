import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
