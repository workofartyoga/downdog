import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { classRouteConfig } from './classes/class-route-config';
import { personRouteConfig } from './person/person-route-config';
import { addressRouteConfig } from './address/address-route-config';

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
  ...addressRouteConfig,
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
