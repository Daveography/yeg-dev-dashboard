import { Component, Input, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { icon, latLng, Layer, marker } from 'leaflet';
import { Permit } from 'src/app/models/permit/permit';
// import { MapPopupComponent } from '../popup/map-popup.component';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent implements OnInit {
    @Input() Permit: Permit;
    Layer: Layer;
    Popup: Layer;

    constructor() { }

    ngOnInit() {
      this.Layer = marker(
        latLng(this.Permit.Latitude, this.Permit.Longitude),
        {
          title: this.Permit.Description,
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
            popupAnchor: [2, -40]
         })
        }
      )
      // .bindPopup(layer => this.createPopup());
    }

    // private createPopup(): NgElement {
    //   const popupEl = document.createElement('popup-element') as NgElement & WithProperties<MapPopupComponent>;
    //   popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    //   popupEl.Permit = this.Permit;
    //   document.body.appendChild(popupEl);
    //   return popupEl;
    // }
}
