import { IWhereComponent } from "./where-component";

export class WhereGroup implements IWhereComponent {
  readonly Components: IWhereComponent[];

  constructor(...components: IWhereComponent[]) {
    this.Components = components;
  }

  public add(...components: IWhereComponent[]) {
    this.Components.push(...components);
  }

  protected getComponents(): IWhereComponent[] {
    return this.Components;
  }

  public toString(): string {
    if (this.Components && this.Components.length > 0) {
      return `(${this.Components.join(' ')})`;
    }
    else {
      return '';
    }
  }
}
