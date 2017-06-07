import { AddressComponent } from './address.component';
import { Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';

export const addressRouteConfig: Routes = [
  {
    path: 'address',
    children:[
      {
        path: '',
        component: AddressComponent
      },
      {
        path: 'create',
        component: AddressFormComponent
      },
      {
        path: ':id',
        component: AddressFormComponent
      }
    ]
  }
]
