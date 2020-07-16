import { MultiPolygon } from 'geojson';
import { SodaDataset } from 'soda-angular';

@SodaDataset('jabg-wnye')
export class TitleParcel {
  id: number;
  latitude: number;
  longitude: number;
  area: number;
  geometry: MultiPolygon;
}
