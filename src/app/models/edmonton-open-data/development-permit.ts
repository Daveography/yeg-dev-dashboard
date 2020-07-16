import { FloatingTimestamp, Location, SodaDataset } from 'soda-angular';

// tslint:disable: variable-name
@SodaDataset('8b78-2kux')
export class DevelopmentPermit {
  city_file_number: string;
  permit_type: string;
  permit_class: string;
  permit_date: FloatingTimestamp;
  status: string;
  description_of_development: string;
  address: string;
  legal_description: string;
  neighbourhood_id: number;
  neighbourhood: string;
  neighbourhood_classification: string;
  ward: string;
  zoning: string;
  land_parcel_count: number;
  latitude: number;
  longitude: number;
  location: Location;
}
