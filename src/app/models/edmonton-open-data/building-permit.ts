import { FloatingTimestamp, Location, SodaDataset } from 'soda-angular';

// tslint:disable: variable-name
@SodaDataset('rwuh-apwg')
export class BuildingPermit {
  row_id: string;
  issue_date: FloatingTimestamp;
  permit_number: string;
  year: number;
  month_number: number;
  permit_date: FloatingTimestamp;
  job_category: string;
  address: string;
  legal_description: string;
  neighbourhood: string;
  neighbourhood_numberr: number;
  job_description: string;
  building_type: string;
  work_type: string;
  floor_area: number;
  construction_value: number;
  zoning: string;
  units_added: number;
  latitude: number;
  longitude: number;
  location: Location;
  count: number;
}
