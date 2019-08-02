import { PermitId } from './permit-id';
import { PermitZoning } from './permit-zoning';
import { PermitAddress } from './permit-address';
import { PermitNeighbourhood } from './permit-neighbourhood';
import { Position } from 'src/app/models/common/geo/position';
import { PermitDescription } from './permit-description';
import { PermitType } from './permit-type';
import { PermitClass } from './permit-class';
import { PermitCategory } from './permit-category';
import { PermitStatus } from './permit-status';
import { PermitValue } from './permit-value';

export class Permit {
  readonly Id: PermitId;
  readonly Date: Date;
  readonly Position: Position;
  readonly Zoning: PermitZoning;
  readonly Address: PermitAddress;
  readonly Neighbourhood: PermitNeighbourhood;
  readonly Description: PermitDescription;
  readonly Type: PermitType;
  readonly Class: PermitClass;
  readonly Category: PermitCategory;
  readonly Status: PermitStatus;
  readonly Value: PermitValue;

  constructor(private _id: PermitId,
    private _date: Date,
    private _position: Position,
    private _zoning: PermitZoning,
    private _address: PermitAddress,
    private _neighbourhood: PermitNeighbourhood,
    private _description: PermitDescription,
    private _type: PermitType,
    private _class: PermitClass,
    private _category: PermitCategory,
    private _status: PermitStatus,
    private _value: PermitValue) {

      if (!_id) {
        throw new Error('Id must be provided');
      }

      if (!_date) {
        throw new Error('Date must be provided');
      }

      if (!_position) {
        throw new Error('Position must be provided');
      }

      if (!_zoning) {
        throw new Error('Zoning must be provided');
      }

      if (!_address) {
        throw new Error('Address must be provided');
      }

      if (!_neighbourhood) {
        throw new Error('Neighbourhood must be provided');
      }

      if (!_description) {
        throw new Error('Description must be provided');
      }

      if (!_type) {
        throw new Error('Type must be provided');
      }

      if (!_class) {
        throw new Error('Class must be provided');
      }

      if (!_category) {
        throw new Error('Category must be provided');
      }

      if (!_status) {
        throw new Error('Status must be provided');
      }

      if (!_value) {
        throw new Error('Value must be provided');
      }

      this.Id = _id;
      this.Date = _date;
      this.Position = _position;
      this.Zoning = _zoning;
      this.Address = _address;
      this.Neighbourhood = _neighbourhood;
      this.Description = _description;
      this.Type = _type;
      this.Class = _class;
      this.Category = _category;
      this.Status = _status;
      this.Value = _value;
    }

  public toString(): string {
    return this.Description.toString();
  }
}