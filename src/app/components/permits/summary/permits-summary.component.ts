import { Component, Input } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';

@Component({
  selector: 'permits-summary',
  templateUrl: './permits-summary.component.html'
})
export class PermitsSummaryComponent {
    @Input() Permits: Permit[];

    constructor() { }
}
