import { Component, Input } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';
import { MatDialog } from '@angular/material';
import { PermitDetailComponent } from '../detail/permit-detail.component';

@Component({
  selector: 'app-permits-summary',
  templateUrl: './permits-summary.component.html'
})
export class PermitsSummaryComponent {
    @Input() Permits: Permit[];
    DisplayColumns: string[] = [ 'Date', 'Neighbourhood', 'Type', 'Description' ];

    constructor(private dialog: MatDialog) { }

    viewDetail(permit: Permit) {
      this.dialog.open(PermitDetailComponent, {
        width: '800px',
        data: permit
      });
    }
}
