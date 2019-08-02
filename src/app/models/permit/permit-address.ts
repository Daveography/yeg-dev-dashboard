export class PermitAddress {
  constructor(private readonly _address: string) {

    if (!_address) {
      throw new Error('Address must be provided');
    }
  }

  public toString(): string {
    return this._address;
  }
}