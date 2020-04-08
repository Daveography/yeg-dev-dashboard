import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { combineLatest } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { Permit } from 'src/app/models/permit/permit';
import { OdpToPermitService } from 'src/app/services/permit/odp-to-permit-service';
import { OdpContext } from '../../models/edmonton-open-data/odp-context';
import { FloatingTimestamp } from 'soda-angular/datatypes';

@Component({
  selector: 'permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.scss']
})
export class PermitsComponent implements OnInit {

  Permits: Permit[];
  SelectedPermit: Permit;

  constructor(
    private context: OdpContext,
    private permitService: OdpToPermitService
    ) { }

  ngOnInit() {
    this.getPermits();
  }

  getPermits(): void {
    const lastWeek = this.DaysAgo(7);

    combineLatest(
      this.context.developmentPermits
        .where(p => p.permit_type).equals('Major Development Permit')
        .where(p => p.permit_date).greaterThan(lastWeek)
        .limit(20).observable(),
      this.context.buildingPermits
        .where(p => p.construction_value).greaterThan(2000000)
        .where(p => p.permit_date).greaterThan(lastWeek)
        .limit(20).observable()
    )
    .pipe(
      flatMap(([dps, bps]) => [
        dps.map(permit => this.permitService.FromDevelopmentPermit(permit)),
        bps.map(permit => this.permitService.FromBuildingPermit(permit))
      ]),
      tap(permits => permits.sort((a, b) => a.Date.getTime() - b.Date.getTime()))
    )
    .subscribe(permits => this.Permits = permits);
  }

  onSelect(permit: Permit): void {
    this.SelectedPermit = permit;
  }

  private DaysAgo(days: number): FloatingTimestamp {
    const now = moment(moment.now());
    const fromDate = now.subtract(days, 'days');
    return new FloatingTimestamp(fromDate.toDate());
  }
}
