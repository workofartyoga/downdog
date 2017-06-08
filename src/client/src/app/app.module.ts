import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdCardModule, MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AddressFormComponent } from './address/address-form/address-form.component';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressService } from './address/address.service';
import { ClassesComponent } from './classes/classes.component';
import { ClassesService } from './classes/classes.service';
import { ClassFormComponent } from './classes/class-form/class-form.component';
import { ClassesListComponent } from './classes/classes-list/classes-list.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person/person.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonService } from './person/person.service';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressFormComponent,
    AddressListComponent,
    ClassesComponent,
    ClassFormComponent,
    ClassesListComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonListComponent,
    PersonFormComponent,
    HomeComponent
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
}

