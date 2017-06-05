import { Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
export const personRouteConfig: Routes = [
  {
    path: 'person',
    children:[
      {
        path: '',
        component: PersonComponent
      },
      {
        path: 'detail/:id',
        component: PersonDetailComponent
      },
      {
        path: 'list',
        component: PersonListComponent
      },
      {
        path: 'create',
        component: PersonFormComponent
      },
      {
        path: 'edit/:id',
        component: PersonFormComponent
      }
    ]
  }
]
