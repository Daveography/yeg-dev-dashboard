import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MaterialModule } from '../../../material.module';
import { MapComponent } from './map.component';
import { MapMarkerComponent } from './marker/map-marker.component';
import { MapPopupComponent } from './popup/map-popup.component';

@NgModule({
  declarations: [
    MapComponent,
    MapMarkerComponent,
    MapPopupComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    LeafletModule
  ],
  exports: [
    MapComponent
  ],
  entryComponents: [
    MapPopupComponent
  ]
})
export class MapModule {
  constructor(private injector: Injector) {
    this.registerMapPopupElement(injector);
  }

  private registerMapPopupElement(injector: Injector) {
    const PopupElement = createCustomElement(MapPopupComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }
}
