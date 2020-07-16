import { MultiPolygon } from 'geojson';

export interface TitleParcel {
  id: number;
  latitude: number;
  longitude: number;
  area: number;
  geometry: MultiPolygon;
}
