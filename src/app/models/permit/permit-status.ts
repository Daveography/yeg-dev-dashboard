export class PermitStatus {
  constructor(private readonly _status: string) {

    if (!_status) {
      throw new Error('Status must be provided');
    }
  }

  public toString(): string {
    return this._status;
  }
}