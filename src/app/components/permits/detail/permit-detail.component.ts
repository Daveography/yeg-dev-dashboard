import { Component, Input } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';

@Component({
  selector: 'app-permit-detail',
  templateUrl: './permit-detail.component.html'
})
export class PermitDetailComponent {
    @Input() Permit: Permit;

    constructor() { }
}
