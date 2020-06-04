import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FloatingTimestamp } from 'soda-angular/datatypes';
import { Permit } from 'src/app/models/permit/permit';
import { OdpToPermitService } from 'src/app/services/permit/odp-to-permit-service';
import { OdpContext } from '../../models/edmonton-open-data/odp-context';

@Component({
  selector: 'app-permits',
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

    merge(
      this.context.developmentPermits
        .where(p => p.permit_type).equals('Major Development Permit')
        .where(p => p.permit_date).greaterThan(lastWeek)
        .limit(20)
        .observable()
        .pipe(
          map(dps => dps.map(permit => this.permitService.FromDevelopmentPermit(permit)))
        ),
      this.context.buildingPermits
        .where(p => p.construction_value).greaterThan(2000000)
        .where(p => p.permit_date).greaterThan(lastWeek)
        .limit(20)
        .observable()
        .pipe(
          map(dps => dps.map(permit => this.permitService.FromBuildingPermit(permit))
        )
    )
    .pipe(
      tap(permits => permits.sort((a, b) => a.Date.getTime() - b.Date.getTime())))
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
