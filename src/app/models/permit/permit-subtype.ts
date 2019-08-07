export class PermitSubtype {
  constructor(private readonly _subtype: string) {

    if (_subtype === null) {
      throw new Error('Subtype must be provided');
    }
  }

  public toString(): string {
    return this._subtype;
  }
}