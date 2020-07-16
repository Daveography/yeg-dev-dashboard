import { MultiPolygon } from 'geojson';
import { SodaDataset } from 'soda-angular';

@SodaDataset('kk4c-7pcv')
export class LegalParcel {
  id: number;
  latitude: number;
  longitude: number;
  area: number;
  geometry: MultiPolygon;
}
