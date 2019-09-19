export class PermitZoning {
  constructor(private readonly _zoning: string) {

    // if (!_zoning) {
    //   throw new Error('Zoning must be provided');
    // }
  }

  public toString(): string {
    return this._zoning;
  }
}