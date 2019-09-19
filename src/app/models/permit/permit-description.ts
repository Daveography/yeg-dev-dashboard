export class PermitDescription {
  constructor(private readonly _description: string) {

    // if (!_description) {
    //   throw new Error('Description must be provided');
    // }
  }

  public toString(): string {
    return this._description;
  }
}
