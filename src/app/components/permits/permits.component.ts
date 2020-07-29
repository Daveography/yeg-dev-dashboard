import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, forkJoin, MonoTypeOperatorFunction, Observable, of } from 'rxjs';
import { catchError, finalize, map, share, tap } from 'rxjs/operators';
import { FloatingTimestamp } from 'soda-angular/datatypes';
import { EdmontonCentreLocation } from 'src/app/models/edmonton-centre';
import { Permit } from 'src/app/models/permit/permit';
import { OdpToPermitService } from 'src/app/services/permit/odp-to-permit-service';
import { OdpContext } from '../../models/edmonton-open-data/odp-context';

@Component({
  selector: 'app-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.scss']
})
export class PermitsComponent implements OnInit {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  Loading = this.loadingSubject.asObservable();
  Permits: Observable<Permit[]>;
  SelectedPermit: Permit;

  constructor(
    private context: OdpContext,
    private permitService: OdpToPermitService
    ) { }

  ngOnInit() {
    this.getPermits();
  }

  getPermits(): void {
    this.loadingSubject.next(true);

    const last7Days = this.DaysAgo(7);
    const last14Days = this.DaysAgo(14);

    this.Permits = forkJoin(
      this.getBuildingPermitsOver2Mil(last14Days),
      this.getCentralBuildingPermits(last14Days),
      this.getMajorDevelopmentPermits(last14Days),
      this.getHolyroodBuildingPermits(last14Days)
    )
    .pipe(
      this.flatten(),
      this.removeDuplicates(),
      this.sortByDate(),
      finalize(() => this.loadingSubject.next(false)),
      share()
    );
  }

  onSelect(permit: Permit): void {
    this.SelectedPermit = permit;
  }

  private DaysAgo(days: number): FloatingTimestamp {
    const now = moment(moment.now());
    const fromDate = now.subtract(days, 'days');
    return new FloatingTimestamp(fromDate.toDate());
  }

  private getBuildingPermitsOver2Mil(since: FloatingTimestamp): Observable<Permit[]> {
    return this.context.buildingPermits
      .where(p => p.construction_value).greaterThan(2000000)
      .and(p => p.permit_date).greaterThan(since)
      .observable()
      .pipe(
        map(dps => dps.map(permit => this.permitService.FromBuildingPermit(permit))),
        catchError(() => of<Permit[]>([]))
      );
  }

  private getCentralBuildingPermits(since: FloatingTimestamp): Observable<Permit[]> {

    return this.context.buildingPermits
      .location(p => p.location).withinCircle(EdmontonCentreLocation, 4000)
      .and(p => p.permit_date).greaterThan(since)
      .and(p => p.building_type).not().equals('Single House (110)')
      .and(p => p.building_type).not().equals('Single Detached House (110)')
      .and(p => p.building_type).not().equals('Semi-Detached House (210)')
      .and(p => p.building_type).not().equals('Detached Garage (010)')
      .and(p => p.building_type).not().equals('Shed (040)')
      .observable()
      .pipe(
        map(dps => dps.map(permit => this.permitService.FromBuildingPermit(permit))),
        catchError(() => of<Permit[]>([]))
      );
  }

  private getHolyroodBuildingPermits(since: FloatingTimestamp): Observable<Permit[]> {

    return this.context.buildingPermits
      .where(p => p.neighbourhood).equals('HOLYROOD')
      .and(p => p.permit_date).greaterThan(since)
      .observable()
      .pipe(
        map(dps => dps.map(permit => this.permitService.FromBuildingPermit(permit))),
        catchError(() => of<Permit[]>([]))
      );
  }

  private getMajorDevelopmentPermits(since: FloatingTimestamp): Observable<Permit[]> {
    return this.context.developmentPermits
      .where(p => p.permit_type).equals('Major Development Permit')
      .and(p => p.permit_date).greaterThan(since)
      .observable()
      .pipe(
        map(dps => dps.map(permit => this.permitService.FromDevelopmentPermit(permit))),
        catchError(() => of<Permit[]>([]))
      );
  }

  private flatten() {
    // TODO: Find a more elegant way to do this
    return map(([w, x, y, z]) => [...w, ...x, ...y, ...z]);
  }

  private removeDuplicates(): MonoTypeOperatorFunction<Permit[]> {
    return map(permits => permits.filter((item, index) =>
      index === permits.findIndex(p => (p.Id === item.Id))
    ));
  }

  private sortByDate(): MonoTypeOperatorFunction<Permit[]> {
    return tap(permits => permits.sort((a, b) => b.Date.getTime() - a.Date.getTime()));
  }
}
