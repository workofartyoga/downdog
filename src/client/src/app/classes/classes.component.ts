import { Component } from '@angular/core';
import { IClass } from '../../../../shared/classes';
import { Observable } from 'rxjs/Observable';
import { ClassesService } from './classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dd-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  classes$ : Observable<IClass[]>;

  constructor(
    private _service: ClassesService,
    private _router: Router
  ) {
    this.classes$ = this._service.loadAllClasses();
  }

  edit( c : IClass ) {
    this._router.navigate(['classes', 'edit', c.id ]);
  }

  create() {
    this._router.navigate(['classes', 'create' ]);
  }
}
