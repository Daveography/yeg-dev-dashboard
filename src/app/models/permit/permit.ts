import { PermitType } from './permit-type';

export interface Permit {
  Id: string;
  Date: Date;
  Latitude: number;
  Longitude: number;
  Zoning: string;
  Address: string;
  Neighbourhood: string;
  Description: string;
  Type: PermitType;
  Subtype: string;
  Class: string;
  Category: string;
  Status: string;
  Value: number;
}
