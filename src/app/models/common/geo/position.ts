import { Latitude } from './latitude';
import { Longitude } from './longitude';

export class Position {
  constructor(
    private readonly _latitude: Latitude,
    private readonly _longitude: Longitude) {

      if (!_latitude) {
        throw new Error('Latitude must be provided');
      }

      if (!_longitude) {
        throw new Error('Longitude must be provided');
      }
    }

    get Latitude(): Latitude {
      return this._latitude;
    }

    get Longitude(): Longitude {
      return this._longitude;
    }

    public toString(): string {
      return `${this._latitude}, ${this._longitude}`;
    }
}