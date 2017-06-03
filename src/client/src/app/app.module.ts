import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressService } from './address/address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
