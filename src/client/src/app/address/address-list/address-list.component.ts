import { Component, Input } from '@angular/core';
import { IPostalAddress } from '../../../../../shared/postal-address';

@Component({
  selector: 'dd-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent{

  @Input()
  addresses: IPostalAddress[];
  constructor() { }

}
