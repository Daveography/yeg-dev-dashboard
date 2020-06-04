import { Injectable } from '@angular/core';
import { BuildingPermit } from 'src/app/models/edmonton-open-data/building-permit';
import { DevelopmentPermit } from 'src/app/models/edmonton-open-data/development-permit';
import { Permit } from 'src/app/models/permit/permit';
import { PermitType } from 'src/app/models/permit/permit-type';

@Injectable({
  providedIn: 'root',
})
export class OdpToPermitService {

  public FromDevelopmentPermit(developmentPermit: DevelopmentPermit): Permit {
    return {
      Id: developmentPermit.city_file_number,
      Date: new Date(developmentPermit.permit_date),
      Latitude: developmentPermit.latitude,
      Longitude: developmentPermit.longitude,
      Zoning: developmentPermit.zoning,
      Address: developmentPermit.address,
      Neighbourhood: developmentPermit.neighbourhood,
      Description: developmentPermit.description_of_development,
      Type: PermitType.DevelopmentPermit,
      Subtype: developmentPermit.permit_type,
      Class: developmentPermit.permit_class,
      Category: 'N/A',
      Status: developmentPermit.status,
      Value: 0
    };
  }

  public FromBuildingPermit(buildingPermit: BuildingPermit): Permit {
    return {
      Id: buildingPermit.row_id,
      Date: new Date(buildingPermit.issue_date),
      Latitude: buildingPermit.latitude,
      Longitude: buildingPermit.longitude,
      Zoning: buildingPermit.zoning,
      Address: buildingPermit.address,
      Neighbourhood: buildingPermit.neighbourhood,
      Description: buildingPermit.job_description,
      Type: PermitType.BuildingPermit,
      Subtype: buildingPermit.work_type,
      Class: buildingPermit.building_type,
      Category: buildingPermit.job_category,
      Status: 'Issued',
      Value: buildingPermit.construction_value
    };
  }
}
