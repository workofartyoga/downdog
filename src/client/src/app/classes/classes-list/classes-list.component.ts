import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IClass } from '../../../../../shared/classes';

@Component({
  selector: 'dd-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  @Input()
  classes: IClass[];

  @Output('create')
  onCreate = new EventEmitter();

  @Output('edit')
  onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.onCreate.emit();
  }

  edit( c: IClass ) {
    this.onEdit.emit( c );
  }

}
