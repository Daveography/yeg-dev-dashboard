import { SodaContext } from "../soda/soda-context";
import { DevelopmentPermit } from "./development-permit";
import { BuildingPermit } from "./building-permit";
import { Injectable } from "@angular/core";
import { SodaResource } from "../soda/soda-resource";
import { SodaHost } from "../soda/soda-host";
import { SodaResourceId } from "../soda/soda-resource-id";
import { SodaClient } from "../soda/soda-client";

@Injectable({
  providedIn: 'root',
})
export class OdpContext extends SodaContext {
  public readonly developmentPermits: SodaResource<DevelopmentPermit>;
  public readonly buildingPermits: SodaResource<BuildingPermit>;

  constructor(private sodaClient: SodaClient) {
    // Hardcode for now; will make this more elegant later
    super(new SodaHost('https://data.edmonton.ca/'));
    this.developmentPermits = new SodaResource<DevelopmentPermit>(new SodaResourceId('8b78-2kux'), this, sodaClient);
    this.buildingPermits = new SodaResource<BuildingPermit>(new SodaResourceId('rwuh-apwg'), this, sodaClient);
  }
}
