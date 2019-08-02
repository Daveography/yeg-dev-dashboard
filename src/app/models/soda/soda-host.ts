export class SodaHost {
  
  constructor(private _host: string) {
    if (!_host) {
      throw new Error('Host must be provided');
    } }

  public toString(): string {
    return this._host;
  }
}
