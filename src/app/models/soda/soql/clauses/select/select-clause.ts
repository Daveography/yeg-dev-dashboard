import { IClause } from "../clause";
import { Column } from "../column";

export class SelectClause implements IClause {
  readonly Columns: Column[];

  constructor(...columns: Column[]) {
    this.Columns = columns;
  }

  add(...columns: Column[]) {
    this.Columns.push(...columns);
  }

  toString(): string {
    if (this.Columns && this.Columns.length > 0) {
      return `$select=${this.Columns.join(',')}`;
    }
    else {
      return '';
    }
  }
}
