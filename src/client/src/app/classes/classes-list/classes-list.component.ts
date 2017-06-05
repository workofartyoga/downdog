import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClass } from '../../../../../shared/classes';
import { ClassesService } from '../classes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dd-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  classes$: Observable<IClass[]>;

  constructor(
    private service:ClassesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses(){
    this.classes$ = this.service.loadAllClasses();
  }

  openClass( classEntry: IClass ){
    this.router.navigate(['classes', classEntry.id ]);
  }

}
