export class PermitNeighbourhood {
  constructor(private readonly _neighbourhood: string) {

    // if (!_neighbourhood) {
    //   throw new Error('Neighbourhood must be provided');
    // }
  }

  public toString(): string {
    return this._neighbourhood;
  }
}
