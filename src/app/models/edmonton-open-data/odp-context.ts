import { SodaContext, SodaResource, SodaHost, SodaResourceId, SodaClient } from 'soda-angular';
import { DevelopmentPermit } from './development-permit';
import { BuildingPermit } from './building-permit';
import { Injectable } from '@angular/core';
import { LegalParcel } from './legal-parcel';

@Injectable({
  providedIn: 'root',
})
@SodaHost('https://data.edmonton.ca/')
export class OdpContext extends SodaContext {
  public readonly developmentPermits: SodaResource<DevelopmentPermit>;
  public readonly buildingPermits: SodaResource<BuildingPermit>;
  public readonly legalParcels: SodaResource<LegalParcel>;

  constructor(sodaClient: SodaClient) {
    super();

    // Hardcode for now; will make this more elegant later
    this.developmentPermits = new SodaResource<DevelopmentPermit>(new SodaResourceId('8b78-2kux'), this, sodaClient);
    this.buildingPermits = new SodaResource<BuildingPermit>(new SodaResourceId('rwuh-apwg'), this, sodaClient);
    this.legalParcels = new SodaResource<LegalParcel>(new SodaResourceId('kk4c-7pcv'), this, sodaClient);
  }
}
