import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPostalAddress } from '../../../../../shared/postal-address';

@Component({
  selector: 'dd-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent{

  @Input()
  addresses: IPostalAddress[];

  @Output()
  onSelect = new EventEmitter();

  selected: IPostalAddress | null = null;
  constructor() { }

  getAddress(addr: IPostalAddress) {
    let template = '';
    if( addr.street1 ){ template += `${addr.street1}, ` }
    if( addr.street2 ){ template += `${addr.street2}, ` }
    if( addr.pobox ) { template += `PO Box ${addr.pobox}, `}
    if( addr.city ) { template += `${addr.city}, `}
    if( addr.state ) { template += `${addr.state} `}
    if( addr.postalCode ) { template += `${addr.postalCode}`}
    return template;
  }

  select( address: IPostalAddress ) {
    this.selected = address;
    this.onSelect.emit( address );
  }
}
