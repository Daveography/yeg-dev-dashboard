import { Component, Input, OnInit } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';
import { MapOptions, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-permits-map',
  templateUrl: './permits-map.component.html',
  styleUrls: ['./permits-map.component.scss']
})
export class PermitsMapComponent implements OnInit {
    @Input() Permits: Permit[];
    LeafletOptions: MapOptions;

    constructor() { }

    ngOnInit() {
      this.LeafletOptions = {
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 11,
        center: latLng(53.5446161, -113.486243)
      };
    }
}
