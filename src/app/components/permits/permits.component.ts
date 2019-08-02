import { Component, OnInit } from '@angular/core';
import { OdpContext } from '../../models/edmonton-open-data/odp-context';
import { map, tap } from 'rxjs/operators'
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
      this.context.developmentPermits.getAll(),
      this.context.buildingPermits.getAll()
    )
    .pipe(
      map(([dps, bps]) => [
        dps.map(permit => this.permitService.FromDevelopmentPermit(permit)),
        bps.map(permit => this.permitService.FromBuildingPermit(permit))
      ]),
      map(([dps, bps]) => dps.concat(bps)),
      tap<Permit[]>(permits => permits.sort((a, b) => a.Date.getTime() - b.Date.getTime()))
    )
    .subscribe(permits => this.Permits = permits);
  }

  Permits: Permit[];
  SelectedPermit: Permit;

  onSelect(permit: Permit): void {
    this.SelectedPermit = permit;
  }

}
