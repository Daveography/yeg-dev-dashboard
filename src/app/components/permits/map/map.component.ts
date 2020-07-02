import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Permit } from 'src/app/models/permit/permit';
import { MapOptions, tileLayer, latLng, Map, Layer, marker, icon } from 'leaflet';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
    LeafletOptions: MapOptions;
    private map: Map;
    private markerLayer: Layer;
    private mapReadySubject = new BehaviorSubject<boolean>(false);

    public MapReady = this.mapReadySubject.asObservable();

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

    ngOnDestroy(): void {
      this.mapReadySubject.complete();
    }

    onMapReady(map: Map) {
      this.map = map;
      this.mapReadySubject.next(true);
    }

    setMarker(latitude: number, longitude: number) {
      if (this.markerLayer && this.map.hasLayer(this.markerLayer)) {
        this.map.removeLayer(this.markerLayer);
      }

      const latLong = latLng(latitude, longitude);

      this.map.flyTo(latLong, 15);

      this.markerLayer = marker(
        latLong,
        {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
         })
        }
      );

      this.map.addLayer(this.markerLayer);
    }
}
