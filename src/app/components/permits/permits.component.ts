import { Component, OnInit } from '@angular/core';
import { OdpContext } from '../../models/edmonton-open-data/odp-context';
import { map } from 'rxjs/operators'
import { OdpToPermitService } from 'src/app/services/permit/odp-to-permit-service';
import { Permit } from 'src/app/models/permit/permit';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.css']
})
export class PermitsComponent implements OnInit {

  constructor(
    private context: OdpContext,
    private permitService: OdpToPermitService
    ) { }

  ngOnInit() {
    this.getPermits();
  }

  getPermits(): void {
    combineLatest(
      this.context.developmentPermits
        .getAll()
        .pipe(
          map(allPermits => 
            allPermits.map(permit => this.permitService.FromDevelopmentPermit(permit)))
          ),
      this.context.buildingPermits
        .getAll()
        .pipe(
          map(allPermits => 
            allPermits.map(permit => this.permitService.FromBuildingPermit(permit)))
          )
    )
    .pipe(
      map(([dps, bps]) => dps.concat(bps))
    )
    .subscribe(permits => this.Permits = permits);
  }

  Permits: Permit[];
  SelectedPermit: Permit;

  onSelect(permit: Permit): void {
    this.SelectedPermit = permit;
  }

}
