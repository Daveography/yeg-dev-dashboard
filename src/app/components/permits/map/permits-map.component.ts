import { Component, Input } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';

@Component({
  selector: 'permits-map',
  templateUrl: './permits-map.component.html',
  styleUrls: ['./permits-map.component.css']
})
export class PermitsMapComponent {
    @Input() Permits: Permit[];

    MapLatitude : number;
    MapLongitude : number;

    constructor() { }
}