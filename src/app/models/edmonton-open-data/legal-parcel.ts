import { MultiPolygon } from 'geojson';

export interface LegalParcel {
  id: number;
  latitude: number;
  longitude: number;
  area: number;
  geometry: MultiPolygon;
}
