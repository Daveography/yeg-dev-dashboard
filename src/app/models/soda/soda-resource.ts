import { SodaResourceId } from "./soda-resource-id";
import { SodaHost } from "./soda-host";
import { SodaContext } from "./soda-context";
import { SodaClient } from "./soda-client";
import { Observable } from "rxjs";

export interface ISodaResource<TEntity> {
  id: SodaResourceId;
  context: SodaContext;
  getResourceUrl(): string;
  getAll(): Observable<TEntity[]>;
}

export class SodaResource<TEntity> implements ISodaResource<TEntity> {

  constructor(readonly id: SodaResourceId, readonly context: SodaContext, readonly client: SodaClient) { }

  public getResourceUrl(): string {
    return `${this.context.host}resource/${this.id}.json?$limit=20`; // TEMP limit
  }

  public getAll(): Observable<TEntity[]> {
    return this.client.getResource(this);
  }
}
