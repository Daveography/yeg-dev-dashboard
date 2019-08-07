import { DevelopmentPermit } from 'src/app/models/edmonton-open-data/development-permit';
import { Permit } from 'src/app/models/permit/permit';
import { Position } from 'src/app/models/common/geo/position';
import { Latitude } from 'src/app/models/common/geo/latitude';
import { Longitude } from 'src/app/models/common/geo/longitude';
import { PermitZoning } from 'src/app/models/permit/permit-zoning';
import { PermitAddress } from 'src/app/models/permit/permit-address';
import { PermitNeighbourhood } from 'src/app/models/permit/permit-neighbourhood';
import { PermitDescription } from 'src/app/models/permit/permit-description';
import { PermitClass } from 'src/app/models/permit/permit-class';
import { PermitValue } from 'src/app/models/permit/permit-value';
import { PermitId } from 'src/app/models/permit/permit-id';
import { PermitType } from 'src/app/models/permit/permit-type';
import { PermitSubtype } from 'src/app/models/permit/permit-subtype';
import { PermitStatus } from 'src/app/models/permit/permit-status';
import { PermitCategory } from 'src/app/models/permit/permit-category';
import { BuildingPermit } from 'src/app/models/edmonton-open-data/building-permit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OdpToPermitService {

  public FromDevelopmentPermit(developmentPermit: DevelopmentPermit): Permit {
    return new Permit(
      new PermitId(developmentPermit.city_file_number),
      new Date(developmentPermit.permit_date),
      new Position(
        new Latitude(developmentPermit.latitude),
        new Longitude(developmentPermit.longitude)),
      new PermitZoning(developmentPermit.zoning),
      new PermitAddress(developmentPermit.address),
      new PermitNeighbourhood(developmentPermit.neighbourhood),
      new PermitDescription(developmentPermit.description_of_development),
      PermitType.DevelopmentPermit,
      new PermitSubtype(developmentPermit.permit_type),
      new PermitClass(developmentPermit.permit_class),
      new PermitCategory('N/A'),
      new PermitStatus(developmentPermit.status),
      new PermitValue(0)
    );
  };

  public FromBuildingPermit(buildingPermit: BuildingPermit): Permit {
    return new Permit(
      new PermitId(buildingPermit.row_id),
      new Date(buildingPermit.issue_date),
      new Position(
        new Latitude(buildingPermit.latitude),
        new Longitude(buildingPermit.longitude)),
      new PermitZoning(buildingPermit.zoning),
      new PermitAddress(buildingPermit.address),
      new PermitNeighbourhood(buildingPermit.neighbourhood),
      new PermitDescription(buildingPermit.job_description),
      PermitType.BuildingPermit,
      new PermitSubtype(buildingPermit.work_type),
      new PermitClass(buildingPermit.building_type),
      new PermitCategory(buildingPermit.job_category),
      new PermitStatus('Issued'),
      new PermitValue(buildingPermit.construction_value)
    );
  };
}