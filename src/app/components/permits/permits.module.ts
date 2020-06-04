import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MaterialModule } from '../../material.module';
import { PermitDetailComponent } from './detail/permit-detail.component';
import { PermitsMapComponent } from './map/permits-map.component';
import { MapMarkerComponent } from './map/marker/map-marker.component';
import { PermitsComponent } from './permits.component';
import { PermitsSummaryComponent } from './summary/permits-summary.component';

@NgModule({
  declarations: [
    PermitsComponent,
    PermitsSummaryComponent,
    PermitDetailComponent,
    PermitsMapComponent,
    MapMarkerComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    LeafletModule,
    FlexLayoutModule
  ],
  entryComponents: []
})
export class PermitsModule { }
