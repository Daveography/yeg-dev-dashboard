import { Component, Input, OnInit } from '@angular/core';
import { icon, latLng, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-map-marker',
  templateUrl: './app-map-marker.component.html',
  styleUrls: ['./app-map-marker.component.scss']
})
export class MapMarkerComponent implements OnInit {
    @Input() Latitude: number;
    @Input() Longitude: number;
    @Input() Title: string;
    Layer: Layer;

    constructor() { }

    ngOnInit() {
      this.Layer = marker(
        latLng(this.Latitude, this.Longitude),
        {
          title: this.Title,
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
         })
        }
      );
    }
}
