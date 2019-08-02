export class PermitCategory {
  constructor(private readonly _category: string) {

    if (_category === null) {
      throw new Error('Category must be provided');
    }
  }

  public toString(): string {
    return this._category;
  }
}