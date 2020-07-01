import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MapModule } from './map/map.module';
import { PermitsComponent } from './permits.component';
import { PermitsSummaryComponent } from './summary/permits-summary.component';

@NgModule({
  declarations: [
    PermitsComponent,
    PermitsSummaryComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    MapModule
  ],
  entryComponents: [ ]
})
export class PermitsModule { }
