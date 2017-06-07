import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressService } from './address/address.service';
import { MdCardModule, MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { PersonComponent } from './person/person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { HomeComponent } from './home/home.component';
import { PersonService } from './person/person.service';
import { ClassesComponent } from './classes/classes.component';
import { ClassesService } from './classes/classes.service';
import { ClassesListComponent } from './classes/classes-list/classes-list.component';
import { ClassFormComponent } from './classes/class-form/class-form.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    AddressComponent,
    AddressListComponent,
    PersonComponent,
    PersonListComponent,
    PersonFormComponent,
    HomeComponent,
    ClassesComponent,
    ClassesListComponent,
    ClassFormComponent,
    PersonDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [ AddressService, PersonService, ClassesService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( overlayContainer: OverlayContainer ){
    overlayContainer.themeClass = 'down-dog-theme';
  }
}

