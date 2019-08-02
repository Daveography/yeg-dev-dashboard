export class PermitClass {
  constructor(private readonly _class: string) {

    if (_class === null) {
      throw new Error('Class must be provided');
    }
  }

  public toString(): string {
    return this._class;
  }
}