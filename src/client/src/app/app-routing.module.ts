import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PersonComponent } from './person/person/person.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesListComponent } from './classes/classes-list/classes-list.component';
import { ClassFormComponent } from './classes/class-form/class-form.component';
import { classRouteConfig } from './classes/class-route-config';
import { personRouteConfig } from './person/person-route-config';

const routeFallback: Route = {
    path: '**',
    component: HomeComponent
  };

const routeAny : Route = {
  path: '',
  component: HomeComponent
};

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'address',
    component: AddressComponent
  },
  ...personRouteConfig,
  ...classRouteConfig,
  routeAny,
  routeFallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
