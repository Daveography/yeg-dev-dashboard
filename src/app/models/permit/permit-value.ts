export class PermitValue {
  constructor(private readonly _value: number) {

    if (_value === null) {
      throw new Error('Value must be provided');
    }

    if (_value < 0) {
      throw new Error('Value cannot be negative');
    }
  }

  get Value(): number {
    return this._value;
  }

  public toString(): string {
    return `$${this._value.toLocaleString('en-CA')}`;
  }
}