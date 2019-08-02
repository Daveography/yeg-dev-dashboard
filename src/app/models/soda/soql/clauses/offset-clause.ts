import { IClause } from "./clause";

export class OffsetClause implements IClause {
  readonly Rows: number;

  constructor(private rows: number) {
    if (rows < 0) {
      throw new Error('Rows must be 0 or greater');
    }

    if (!Number.isInteger(rows)) {
      throw new Error('Rows must be a whole number');
    }

    this.Rows = rows;
  }

  toString(): string {
    if (this.Rows > 0) {
      return `$offset=${this.Rows}`
    }
    else {
      return '';
    }
  }
}
