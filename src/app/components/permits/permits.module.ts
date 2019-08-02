import { NgModule } from '@angular/core';
import { PermitsComponent } from './permits.component';
import { PermitDetailComponent } from './detail/permit-detail.component';
import { PermitsMapComponent } from './map/permits-map.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PermitsSummaryComponent } from './summary/permits-summary.component';

@NgModule({
  declarations: [
    PermitsComponent,
    PermitsSummaryComponent,
    PermitDetailComponent,
    PermitsMapComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8azIrgR1cmtYlqzMVZt3dvKHSPGki8QU'
    }),
    FlexLayoutModule
  ],
  entryComponents: []
})
export class PermitsModule { }
