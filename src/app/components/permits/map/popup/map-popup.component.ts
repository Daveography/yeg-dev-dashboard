import { Component, Input } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent {
    @Input() Permit: Permit;

    constructor() { }
}
