export class PermitId {
  constructor(private readonly _id: string) {

    if (!_id) {
      throw new Error('Id must be provided');
    }
  }

  public toString(): string {
    return this._id;
  }
}