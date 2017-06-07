import * as _ from 'lodash';
import { Component, OnInit} from '@angular/core';
import { createAddress, IPostalAddress } from '../../../../../shared/postal-address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../address.service';
import { handleError } from '../../util/handle-error';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'dd-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  paForm: FormGroup;

  addressId: number;
  address: IPostalAddress;

  constructor(
    private _fb: FormBuilder,
    private _service: AddressService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    const id = this._route.snapshot.params['id'];
    if( id ){
      this.setAddress( parseInt( id ) );
    }else{
      this.setAddress( -1 );
    }
  }

  ngOnInit() {
    this.paForm = this._fb.group(
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
        address => {
           this.address = address;
          this.address.id = this.addressId;
        },
        _.partial( handleError, 'ERR-ADR-301' )
      );

  }

  setAddress( id: number ) {
    this.addressId = id;
    this.address = {
      id: id,
      label: '',
      street1: '',
      street2: '',
      pobox: '',
      city: '',
      state: '',
      postalCode: ''
    };

    if( this.addressId !== -1 ){
      this._service.findById( this.addressId )
        .subscribe(
          address => {
            this.address = address;
            this.paForm.setValue( toFormValue( address ) );
          },
          _.partial( handleError, 'ERR-ADR-302' )
        )
    }
  }

  goBack() {
    this._router.navigate(['address']);
  }
  save(){
    if( this.address.id === -1 ) {
      this._service.saveAddress(this.address)
        .subscribe(
          address => {
            this.goBack();
          },
          _.partial(handleError, 'ERR-ADR-303')
        );
    }else{
      this._service.updateAddress( this.addressId, this.address )
        .subscribe(
          address => {
            this.goBack();
          },
          _.partial(handleError, 'ERR-ADR-304')
        )
    }
  }
  cancel() {
    this.goBack();
  }
}

function toFormValue( { id, label, street1, street2, pobox, city, state, postalCode }: IPostalAddress) {
  return {label, street1, street2, pobox, city, state, postalCode }
}
