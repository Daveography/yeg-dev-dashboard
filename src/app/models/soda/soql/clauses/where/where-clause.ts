import { IClause } from "../clause";
import { IWhereComponent } from "./where-component";
import { WhereGroup } from "./where-group";

export class WhereClause extends WhereGroup {
  
  public toString(): string {
    let components = super.getComponents();

    if (components.length > 0) {
      return `$where=${components.join(' ')}`;
    }
    else {
      return '';
    }
  }
}
