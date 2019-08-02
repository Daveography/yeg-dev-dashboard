export class Latitude {
  constructor(private readonly _latitude: number) {

    if (_latitude === null) {
      throw new Error('Longitude value must be provided');
    }

    if (_latitude > 90 || _latitude < -90) {
      throw new Error('Latitude must be between -90 and 90 degrees');
    }
  }

  get Degrees(): number {
    return this._latitude;
  }

  public toString(): string {
    return this._latitude.toFixed(6);
  }
}