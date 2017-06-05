import * as _ from 'lodash';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { createAddress, IPostalAddress } from '../../../../../shared/postal-address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../address.service';
import { handleError } from '../../util/handle-error';


@Component({
  selector: 'dd-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  paForm: FormGroup;
  address: IPostalAddress;

  @Output('saved')
  onSaved = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private service: AddressService) {
  }

  ngOnInit() {
    this.resetAddress();
    this.paForm = this.fb.group(
      {
        label: [this.address.label, [Validators.required]],
        street1: [this.address.street1],
        street2: [this.address.street2],
        pobox: [this.address.pobox, [Validators.pattern('[0-9]+')]],
        city: [this.address.city],
        state: [this.address.state],
        postalCode:[this.address.postalCode, [Validators.minLength(5), Validators.pattern('[0-9]+')]]
      }
    );
    this.paForm.valueChanges
      .filter( () => this.paForm.valid ) // only want to see changes on valid values
      .map( createAddress )             // transform the formValue into an address
      .subscribe(
        address => this.address = address
      );

  }

  formValid(){
    return this.paForm.valid;
  }

  resetAddress() {
    this.address = {
      id: -1,
      label: 'home',
      street1: '',
      street2: '',
      pobox: '',
      city: '',
      state: '',
      postalCode: ''
    };

  }

  save(){
    this.service.saveAddress( this.address )
      .subscribe(
        address => {
          this.onSaved.emit(address);
          this.resetAddress();
          this.paForm.setValue( toFormValue(this.address) );
        },
        _.partial( handleError, 'ERR300' )
      );
  }
}

function toFormValue( { id, label, street1, street2, pobox, city, state, postalCode }: IPostalAddress) {
  return {label, street1, street2, pobox, city, state, postalCode }
}
