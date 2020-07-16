import { Injectable } from '@angular/core';
import { SodaClient, SodaContext, SodaHost, SodaResource } from 'soda-angular';
import { BuildingPermit } from './building-permit';
import { DevelopmentPermit } from './development-permit';
import { LegalParcel } from './legal-parcel';
import { TitleParcel } from './title-parcel';

@Injectable({
  providedIn: 'root',
})
@SodaHost('https://data.edmonton.ca/')
export class OdpContext extends SodaContext {
  public readonly developmentPermits: SodaResource<DevelopmentPermit>;
  public readonly buildingPermits: SodaResource<BuildingPermit>;
  public readonly legalParcels: SodaResource<LegalParcel>;
  public readonly titleParcels: SodaResource<TitleParcel>;

  constructor(sodaClient: SodaClient) {
    super(sodaClient);

    this.developmentPermits = new SodaResource(DevelopmentPermit, this);
    this.buildingPermits = new SodaResource(BuildingPermit, this);
    this.legalParcels = new SodaResource(LegalParcel, this);
    this.titleParcels = new SodaResource(TitleParcel, this);
  }
}
