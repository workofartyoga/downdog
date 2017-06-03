import { Component } from '@angular/core';
import { IPostalAddress } from '../../../../../shared/postal-address';

@Component({
  selector: 'dd-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  address: IPostalAddress;

  constructor() {
    this.address = {
      id: -1,
      label: 'home',
      city: '',
      state: '',
      pobox: '',
      postalCode: '',
      street1: '',
      street2: ''
    }
  }

}
