

import { Routes } from '@angular/router';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassesComponent } from './classes.component';

export const classRouteConfig: Routes = [
  {
    path:'classes',
    children: [
      {
        path: '',
        component: ClassesComponent
      },
      {
        path: 'list',
        component: ClassesListComponent
      },
      {
        path: 'create',
        component: ClassFormComponent
      },
      {
        path: ':id',
        component: ClassFormComponent
      }
    ]
  }
];
