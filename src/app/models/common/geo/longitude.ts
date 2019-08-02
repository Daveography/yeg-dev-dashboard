export class Longitude {
  constructor(private readonly _longitude: number) {

    if (_longitude === null) {
      throw new Error('Longitude value must be provided');
    }

    if (_longitude > 180 || _longitude < -180) {
      throw new Error('Longitude must be between -180 and 180 degrees');
    }
  }

  get Degrees(): number {
    return this._longitude;
  }

  public toString(): string {
    return this._longitude.toFixed(6);
  }
}