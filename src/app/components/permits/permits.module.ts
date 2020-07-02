import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MapModule } from './map/map.module';
import { PermitsComponent } from './permits.component';
import { PermitsSummaryComponent } from './summary/permits-summary.component';
import { PermitDetailComponent } from './detail/permit-detail.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    PermitsComponent,
    PermitsSummaryComponent,
    PermitDetailComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    MapModule
  ],
  entryComponents: [
    PermitDetailComponent,
    MapComponent
  ]
})
export class PermitsModule { }
