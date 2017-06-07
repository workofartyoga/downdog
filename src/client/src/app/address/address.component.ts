import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AddressService } from './address.service';
import { IPostalAddress } from '../../../../shared/postal-address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses$: Observable<IPostalAddress[]>;
  constructor(
    private _service: AddressService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addresses$ = this._service.loadAllAddresses();
  }

  create() {
    this._router.navigate(['address', 'create'])
  }

  edit(address: IPostalAddress) {
    this._router.navigate(['address', `${address.id}`]);
  }
}
