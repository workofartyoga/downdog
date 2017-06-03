import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AddressService } from './address.service';
import { IPostalAddress } from '../../../../shared/postal-address';

@Component({
  selector: 'dd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses$: Observable<IPostalAddress[]>;

  constructor( private service: AddressService ) { }

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addresses$ = this.service.loadAllAddresses();
  }

  onSaved() {
    this.loadAddresses();
  }
}
