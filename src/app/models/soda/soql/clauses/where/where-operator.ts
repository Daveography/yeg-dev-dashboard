import { IWhereComponent } from "./where-component";
import { Operator } from "./operator";

export class WhereOperator implements IWhereComponent {
  readonly Operator: Operator;

  constructor(private operator: Operator) {
    if (!operator) {
      throw new Error('Operator type must be provided');
    }

    this.Operator = operator;
  }

  public toString(): string {
    return this.Operator.toString();
  }
}
