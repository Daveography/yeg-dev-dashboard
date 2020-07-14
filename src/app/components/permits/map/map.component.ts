import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultiPolygon } from 'geojson';
import { geoJSON, icon, latLng, Layer, Map, MapOptions, marker, tileLayer } from 'leaflet';
import { BehaviorSubject } from 'rxjs';
import { EdmontonCentre } from 'src/app/models/edmonton-centre';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
    LeafletOptions: MapOptions;
    private map: Map;
    private markerLayer: Layer;
    private shapeLayers: Layer[];
    private mapReadySubject = new BehaviorSubject<boolean>(false);

    public MapReady = this.mapReadySubject.asObservable();

    constructor() {
      this.shapeLayers = new Array<Layer>();
    }

    ngOnInit() {
      this.LeafletOptions = {
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom: 11,
        center: EdmontonCentre
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

    setShapes(shapes: MultiPolygon[]) {

      this.shapeLayers.forEach(layer => {
        if (this.map.hasLayer(layer)) {
          this.map.removeLayer(layer);
        }
      });

      this.shapeLayers = shapes.map(shape => geoJSON(shape));
      this.shapeLayers.forEach(layer => this.map.addLayer(layer));
    }
}
