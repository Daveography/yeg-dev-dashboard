import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SodaClientModule } from 'soda-angular';

import { AppComponent } from './app.component';
import { AppNavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { PermitsModule } from './components/permits/permits.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AppNavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    PermitsModule,
    FlexLayoutModule,
    SodaClientModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-ca' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
