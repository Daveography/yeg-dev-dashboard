export class PermitType {
  constructor(private readonly _type: string) {

    if (_type === null) {
      throw new Error('Type must be provided');
    }
  }

  public toString(): string {
    return this._type;
  }
}