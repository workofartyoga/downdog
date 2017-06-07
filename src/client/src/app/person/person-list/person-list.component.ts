import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from '../../../../../shared/person';

@Component({
  selector: 'dd-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input( 'people' )
  people: IPerson[];

  @Output( 'details' )
  onDetails = new EventEmitter();

  @Output( 'edit' )
  onEdit = new EventEmitter();

  @Output( 'create' )
  onCreate = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  select( person: IPerson ) {
    this.onDetails.emit( person );
  }

  edit( person: IPerson ) {
    this.onEdit.emit( person );
  }

  create() {
    this.onCreate.emit();
  }

}
