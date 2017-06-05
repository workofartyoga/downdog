webpackJsonp([1],{

/***/ "./src/client/src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/client/src async recursive";

/***/ }),

/***/ "./src/client/src/app/address/address-form/address-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-form {\n  max-width: 500px;\n}\n\n.address-full-width{\n  width: 100%;\n}\n\n.address-button {\n  background-color: #1976d2;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n\nform.ng-dirty.ng-invalid {\n  border:none;\n}\n\nform.ng-touched.ng-invalid {\n  border:none !important;\n}\n\n\nform textarea {\n  width: 100%;\n  resize: none;\n}\n\n.field-error-message {\n  text-align: right;\n  padding-right: 68px;\n  font-size: 16px;\n  color: #a10000;\n}\n\nform fieldset {\n  margin-bottom: 20px;\n  border-radius: 3px;\n  border-color: rgba(0,0,0,0.5);\n}\n\nform legend {\n  color: rgba(0,0,0,.5);\n}\n\n\nform button[type='submit'] {\n  margin-right: 75px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/address/address-form/address-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"paForm\" autocomplete=\"off\" novalidate >\n  <fieldset>\n    <legend>Address</legend>\n    <md-input-container class=\"address-full-width\">\n      <input mdInput formControlName=\"label\" placeholder=\"Home / Work...\">\n    </md-input-container>\n\n    <p>\n    <md-input-container class=\"address-full-width\">\n      <textarea mdInput formControlName=\"street1\" placeholder=\"Address\"></textarea>\n    </md-input-container>\n    <md-input-container class=\"address-full-width\">\n      <textarea mdInput formControlName=\"street2\" placeholder=\"Address 2\"></textarea>\n    </md-input-container>\n    <md-input-container class=\"address-full-width\">\n      <input mdInput formControlName=\"pobox\" placeholder=\"Po Box\">\n    </md-input-container>\n    </p>\n\n    <table class=\"address-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <md-input-container>\n            <input mdInput formControlName=\"city\" placeholder=\"City\">\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container>\n            <input mdInput formControlName=\"state\" placeholder=\"State\">\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container>\n            <input mdInput formControlName=\"postalCode\" placeholder=\"Postal Code\" maxlength=\"5\" #postalCode >\n            <md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint>\n          </md-input-container>\n        </td>\n      </tr>\n    </table>\n  </fieldset>\n  <button md-button type=\"submit\" color=\"accent\" (click)=\"add()\" >Add</button>\n</form>\n\n\n<!--<div class=\"debug\">-->\n  <!--<h3>Debug Address:</h3>-->\n  <!--{{ address | json }}-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/client/src/app/address/address-form/address-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_postal_address__ = __webpack_require__("./src/shared/postal-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_service__ = __webpack_require__("./src/client/src/app/address/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_handle_error__ = __webpack_require__("./src/client/src/app/util/handle-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressFormComponent = (function () {
    function AddressFormComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.onSaved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
    }
    AddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetAddress();
        this.paForm = this.fb.group({
            label: [this.address.label, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]],
            street1: [this.address.street1],
            street2: [this.address.street2],
            pobox: [this.address.pobox, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]+')]],
            city: [this.address.city],
            state: [this.address.state],
            postalCode: [this.address.postalCode, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[0-9]+')]]
        });
        this.paForm.valueChanges
            .filter(function () { return _this.paForm.valid; }) // only want to see changes on valid values
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_postal_address__["b" /* createAddress */]) // transform the formValue into an address
            .subscribe(function (address) { return _this.address = address; });
    };
    AddressFormComponent.prototype.formValid = function () {
        return this.paForm.valid;
    };
    AddressFormComponent.prototype.resetAddress = function () {
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
    };
    AddressFormComponent.prototype.add = function () {
        var _this = this;
        this.service.saveAddress(this.address)
            .subscribe(function (address) {
            _this.onSaved.emit(address);
            _this.resetAddress();
            _this.paForm.setValue(toFormValue(_this.address));
        }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR300'));
    };
    return AddressFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])('saved'),
    __metadata("design:type", Object)
], AddressFormComponent.prototype, "onSaved", void 0);
AddressFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'dd-address-form',
        template: __webpack_require__("./src/client/src/app/address/address-form/address-form.component.html"),
        styles: [__webpack_require__("./src/client/src/app/address/address-form/address-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__address_service__["a" /* AddressService */]) === "function" && _b || Object])
], AddressFormComponent);

function toFormValue(_a) {
    var id = _a.id, label = _a.label, street1 = _a.street1, street2 = _a.street2, pobox = _a.pobox, city = _a.city, state = _a.state, postalCode = _a.postalCode;
    return { label: label, street1: street1, street2: street2, pobox: pobox, city: city, state: state, postalCode: postalCode };
}
var _a, _b;
//# sourceMappingURL=address-form.component.js.map

/***/ }),

/***/ "./src/client/src/app/address/address-list/address-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-list {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/address/address-list/address-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"address-list\">\n  <md-list>\n    <h3 md-subheader>Addresses:</h3>\n    <md-list-item *ngFor=\"let address of addresses\" (click)=\"select(address)\" >\n      <md-icon md-list-icon>room</md-icon>\n      <h4 md-line class=\"capitalize\">{{address.label}}</h4>\n      <p md-line > {{getAddress( address)}}</p>\n    </md-list-item>\n  </md-list>\n\n</div>\n"

/***/ }),

/***/ "./src/client/src/app/address/address-list/address-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressListComponent = (function () {
    function AddressListComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.selected = null;
    }
    AddressListComponent.prototype.getAddress = function (addr) {
        var template = '';
        if (addr.street1) {
            template += addr.street1 + ", ";
        }
        if (addr.street2) {
            template += addr.street2 + ", ";
        }
        if (addr.pobox) {
            template += "PO Box " + addr.pobox + ", ";
        }
        if (addr.city) {
            template += addr.city + ", ";
        }
        if (addr.state) {
            template += addr.state + " ";
        }
        if (addr.postalCode) {
            template += "" + addr.postalCode;
        }
        return template;
    };
    AddressListComponent.prototype.select = function (address) {
        this.selected = address;
        this.onSelect.emit(address);
    };
    return AddressListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], AddressListComponent.prototype, "addresses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], AddressListComponent.prototype, "onSelect", void 0);
AddressListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-address-list',
        template: __webpack_require__("./src/client/src/app/address/address-list/address-list.component.html"),
        styles: [__webpack_require__("./src/client/src/app/address/address-list/address-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddressListComponent);

//# sourceMappingURL=address-list.component.js.map

/***/ }),

/***/ "./src/client/src/app/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <dd-address-list [addresses]=\"addresses$ | async\" (onSelect)=\"selected = $event\"></dd-address-list>\n</div>\n<div >\n  <dd-address-form (saved)=\"onSaved()\" ></dd-address-form>\n</div>\n"

/***/ }),

/***/ "./src/client/src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_service__ = __webpack_require__("./src/client/src/app/address/address.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressComponent = (function () {
    function AddressComponent(service) {
        this.service = service;
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.loadAddresses();
    };
    AddressComponent.prototype.loadAddresses = function () {
        this.addresses$ = this.service.loadAllAddresses();
    };
    AddressComponent.prototype.onSaved = function () {
        this.loadAddresses();
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-address',
        template: __webpack_require__("./src/client/src/app/address/address.component.html"),
        styles: [__webpack_require__("./src/client/src/app/address/address.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__address_service__["a" /* AddressService */]) === "function" && _a || Object])
], AddressComponent);

var _a;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "./src/client/src/app/address/address.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_postal_address__ = __webpack_require__("./src/shared/postal-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__ = __webpack_require__("./src/client/src/app/util/recieve-api-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressService = (function () {
    function AddressService(http) {
        this.http = http;
    }
    AddressService.prototype.loadAllAddresses = function () {
        return this.http.get('/api/address')
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["a" /* receiveApiData */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_postal_address__["a" /* createAddresses */]);
    };
    AddressService.prototype.saveAddress = function (address) {
        return this.http.post('/api/address', address)
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_postal_address__["b" /* createAddress */]);
    };
    return AddressService;
}());
AddressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddressService);

var _a;
//# sourceMappingURL=address.service.js.map

/***/ }),

/***/ "./src/client/src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address_component__ = __webpack_require__("./src/client/src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/client/src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_class_route_config__ = __webpack_require__("./src/client/src/app/classes/class-route-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__person_person_route_config__ = __webpack_require__("./src/client/src/app/person/person-route-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routeFallback = {
    path: '**',
    component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
};
var routeAny = {
    path: '',
    component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
};
var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'address',
        component: __WEBPACK_IMPORTED_MODULE_2__address_address_component__["a" /* AddressComponent */]
    }
].concat(__WEBPACK_IMPORTED_MODULE_5__person_person_route_config__["a" /* personRouteConfig */], __WEBPACK_IMPORTED_MODULE_4__classes_class_route_config__["a" /* classRouteConfig */], [
    routeAny,
    routeFallback
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/client/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n\nmd-sidenav {\n  width: 125px;\n}\n\n\nmd-sidenav-container, .my-content{\n  margin: 0;\n  min-height: 200px;\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-toolbar color=\"primary\">\n  <span routerLink=\"\">&nbsp;<md-icon>spa</md-icon>&nbsp;{{title}}</span>\n  <span class=\"fill-remaining-space\"></span>\n  <!--<button md-button>Login</button>-->\n</md-toolbar>\n\n<md-sidenav-container>\n  <md-sidenav mode=\"side\" opened=\"true\">\n    <button md-button routerLink=\"home\"><md-icon>home</md-icon>&nbsp;Home</button>\n    <button md-button routerLink=\"classes\"><md-icon>accessibility</md-icon>&nbsp;Classes</button>\n    <!--<button md-button routerLink=\"schedule\"><md-icon>event</md-icon>&nbsp;Schedule</button>-->\n    <button md-button routerLink=\"person\"><md-icon>person</md-icon>&nbsp;People</button>\n\n  </md-sidenav>\n  <div class=\"my-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n\n"

/***/ }),

/***/ "./src/client/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Work of Art Yoga';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-root',
        template: __webpack_require__("./src/client/src/app/app.component.html"),
        styles: [__webpack_require__("./src/client/src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/client/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/client/src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/client/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address_form_address_form_component__ = __webpack_require__("./src/client/src/app/address/address-form/address-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address_component__ = __webpack_require__("./src/client/src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_address_list_address_list_component__ = __webpack_require__("./src/client/src/app/address/address-list/address-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__address_address_service__ = __webpack_require__("./src/client/src/app/address/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__person_person_person_component__ = __webpack_require__("./src/client/src/app/person/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__person_person_list_person_list_component__ = __webpack_require__("./src/client/src/app/person/person-list/person-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__person_person_form_person_form_component__ = __webpack_require__("./src/client/src/app/person/person-form/person-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("./src/client/src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__person_person_service__ = __webpack_require__("./src/client/src/app/person/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classes_classes_component__ = __webpack_require__("./src/client/src/app/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__classes_classes_service__ = __webpack_require__("./src/client/src/app/classes/classes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__classes_classes_list_classes_list_component__ = __webpack_require__("./src/client/src/app/classes/classes-list/classes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__classes_class_form_class_form_component__ = __webpack_require__("./src/client/src/app/classes/class-form/class-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__person_person_detail_person_detail_component__ = __webpack_require__("./src/client/src/app/person/person-detail/person-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__address_address_form_address_form_component__["a" /* AddressFormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__address_address_component__["a" /* AddressComponent */],
            __WEBPACK_IMPORTED_MODULE_8__address_address_list_address_list_component__["a" /* AddressListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__person_person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_14__person_person_list_person_list_component__["a" /* PersonListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__person_person_form_person_form_component__["a" /* PersonFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__classes_classes_component__["a" /* ClassesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__classes_classes_list_classes_list_component__["a" /* ClassesListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__classes_class_form_class_form_component__["a" /* ClassFormComponent */],
            __WEBPACK_IMPORTED_MODULE_22__person_person_detail_person_detail_component__["a" /* PersonDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__address_address_service__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_17__person_person_service__["a" /* PersonService */], __WEBPACK_IMPORTED_MODULE_19__classes_classes_service__["a" /* ClassesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/client/src/app/classes/class-form/class-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.class-form {\n  max-width: 500px;\n}\n\n.classes-full-width {\n  width: 100%;\n}\n\nform textarea {\n  width: 100%;\n  resize: none;\n}\n\n.field-error-message {\n  text-align: right;\n  padding-right: 68px;\n  font-size: 16px;\n  color: #a10000;\n}\n\nform fieldset {\n  margin-bottom: 20px;\n  border-radius: 3px;\n  border-color: rgba(0,0,0,0.5);\n}\n\nform legend {\n  color: rgba(0,0,0,.5);\n}\n\nform button {\n  margin-left: 25px;\n}\n\nform button[type='submit'] {\n  margin-left: 75px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/classes/class-form/class-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"classForm\" #cf=\"ngForm\" class=\"class-form\" autocomplete=\"off\" novalidate >\n  <fieldset>\n    <legend>Enter / Edit a class</legend>\n\n    <md-input-container class=\"classes-full-width\">\n      <input mdInput formControlName=\"title\" placeholder=\"Title\">\n    </md-input-container>\n\n    <md-input-container class=\"classes-full-width\">\n      <input mdInput formControlName=\"audience\" placeholder=\"Target audience\">\n    </md-input-container>\n\n    <md-input-container class=\"classes-full-width\">\n      <textarea mdInput formControlName=\"summary\" placeholder=\"Summary\"></textarea>\n    </md-input-container>\n\n    <md-input-container class=\"classes-full-width\">\n      <textarea mdInput formControlName=\"description\" placeholder=\"Description\" rows=\"5\"></textarea>\n    </md-input-container>\n\n    <md-input-container class=\"classes-full-width\">\n      <input mdInput formControlName=\"duration\" placeholder=\"Duration (minutes)\">\n    </md-input-container>\n\n    <md-input-container class=\"classes-full-width\">\n      <input mdInput type=\"\" formControlName=\"tags\" placeholder=\"Tags ( yoga, asana, yin...)\">\n    </md-input-container>\n\n  </fieldset>\n  <button md-button (click)=\"cancel()\">Cancel</button>\n  <button md-button color=\"accent\" type=\"submit\" (click)=\"save()\" [disabled]=\"!cf.valid\" >Save</button>\n</form>\n\n<!--<div class=\"debug\">-->\n<!--<h3>Debug ClassEntry:</h3>-->\n<!--{{ classEntry | json }}-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/client/src/app/classes/class-form/class-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_classes__ = __webpack_require__("./src/shared/classes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_service__ = __webpack_require__("./src/client/src/app/classes/classes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_handle_error__ = __webpack_require__("./src/client/src/app/util/handle-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClassFormComponent = (function () {
    function ClassFormComponent(fb, service, router, route) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.route = route;
        var id = route.snapshot.params['id'];
        if (id) {
            this.initClassEntry(parseInt(id, 10));
            console.log("Route id:", id);
        }
        else {
            this.initClassEntry(-1);
        }
    }
    ClassFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ClassFormComponent.prototype.initForm = function () {
        var _this = this;
        this.classForm = this.fb.group({
            description: [this.classEntry.description, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            duration: [this.classEntry.duration, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9]+')]],
            // icon: [this.classEntry.icon],
            // imageUrl: [this.classEntry.imageUrl],
            audience: [this.classEntry.audience, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            summary: [this.classEntry.summary, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(400)]],
            title: [this.classEntry.title, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            tags: [this.classEntry.tags]
        });
        this.classForm.valueChanges
            .filter(function () { return _this.classForm.valid; }) // only want to see changes on valid values
            .map(__WEBPACK_IMPORTED_MODULE_3__shared_classes__["b" /* createClass */]) // transform the formValue into an address
            .subscribe(function (classEntry) { return _this.classEntry = classEntry; });
    };
    ClassFormComponent.prototype.setClassEntry = function (classEntry) {
        this.classEntry = classEntry;
    };
    ClassFormComponent.prototype.initClassEntry = function (id) {
        var _this = this;
        this.classEntry = {
            id: id,
            description: '',
            duration: 0,
            // icon: '',
            // imageUrl: '',
            audience: '',
            summary: '',
            tags: '',
            title: ''
        };
        this.classId = id;
        if (id !== -1) {
            this.service.findClassById(id)
                .subscribe(function (classEntry) {
                _this.classEntry = classEntry;
                _this.classForm.setValue(toFormValue(_this.classEntry));
            }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-302'));
        }
    };
    ClassFormComponent.prototype.cancel = function () {
        this.router.navigate(['classes', 'list']);
    };
    ClassFormComponent.prototype.save = function () {
        var _this = this;
        if (this.classId !== -1) {
            this.classEntry.id = this.classId;
            this.service.saveClass(this.classId, this.classEntry)
                .subscribe(function (classEntry) {
                _this.setClassEntry(classEntry);
                _this.router.navigate(['classes', 'list']);
            }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-300'));
        }
        else {
            this.service.createClass(this.classEntry)
                .subscribe(function (classEntry) {
                _this.setClassEntry(classEntry);
                _this.router.navigate(['classes', 'list']);
            }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-301'));
        }
    };
    return ClassFormComponent;
}());
ClassFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'dd-class-form',
        template: __webpack_require__("./src/client/src/app/classes/class-form/class-form.component.html"),
        styles: [__webpack_require__("./src/client/src/app/classes/class-form/class-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__classes_service__["a" /* ClassesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__classes_service__["a" /* ClassesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], ClassFormComponent);

// function toFormValue( { description, duration, icon, imageUrl, audience, summary, tags, title }: any ) {
//   return { description, duration, icon, imageUrl, audience, summary, tags, title };
// }
function toFormValue(_a) {
    var description = _a.description, duration = _a.duration, audience = _a.audience, summary = _a.summary, tags = _a.tags, title = _a.title;
    return { description: description, duration: duration, audience: audience, summary: summary, tags: tags, title: title };
}
var _a, _b, _c, _d;
//# sourceMappingURL=class-form.component.js.map

/***/ }),

/***/ "./src/client/src/app/classes/class-route-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_form_class_form_component__ = __webpack_require__("./src/client/src/app/classes/class-form/class-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_list_classes_list_component__ = __webpack_require__("./src/client/src/app/classes/classes-list/classes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_component__ = __webpack_require__("./src/client/src/app/classes/classes.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classRouteConfig; });



var classRouteConfig = [
    {
        path: 'classes',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__classes_component__["a" /* ClassesComponent */]
            },
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_1__classes_list_classes_list_component__["a" /* ClassesListComponent */]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_0__class_form_class_form_component__["a" /* ClassFormComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_0__class_form_class_form_component__["a" /* ClassFormComponent */]
            }
        ]
    }
];
//# sourceMappingURL=class-route-config.js.map

/***/ }),

/***/ "./src/client/src/app/classes/classes-list/classes-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 20px;\n}\n\nmd-card:first-child{\n  margin-top: 20px;\n}\n\n.subheader {\n  margin: 24px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  color: rgba(0,0,0,.5);\n}\n\n.menu-button {\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/classes/classes-list/classes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"subheader\">Class List\n  <button class=\"menu-button\" md-button color=\"accent\" (click)=\"loadClasses()\">REFRESH</button>\n  <button class=\"menu-button\" md-button color=\"accent\" routerLink=\"/classes/create\">CREATE</button>\n</h3>\n\n<md-card *ngFor=\"let c of classes$ | async\" >\n  <md-card-title>\n    <md-icon>accessibility</md-icon>&nbsp;{{c.title}}\n  </md-card-title>\n  <md-card-subtitle>{{c.audience}}</md-card-subtitle>\n  <md-card-content>\n    <p>{{c.summary}}</p>\n    <p>{{c.description}}</p>\n    <p>{{c.tags}}</p>\n  </md-card-content>\n\n  <md-card-actions>\n    <button md-button color=\"accent\" (click)=\"openClass(c)\">EDIT</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "./src/client/src/app/classes/classes-list/classes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_service__ = __webpack_require__("./src/client/src/app/classes/classes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassesListComponent = (function () {
    function ClassesListComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    ClassesListComponent.prototype.ngOnInit = function () {
        this.loadClasses();
    };
    ClassesListComponent.prototype.loadClasses = function () {
        this.classes$ = this.service.loadAllClasses();
    };
    ClassesListComponent.prototype.openClass = function (classEntry) {
        this.router.navigate(['classes', classEntry.id]);
    };
    return ClassesListComponent;
}());
ClassesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-classes-list',
        template: __webpack_require__("./src/client/src/app/classes/classes-list/classes-list.component.html"),
        styles: [__webpack_require__("./src/client/src/app/classes/classes-list/classes-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_service__["a" /* ClassesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_service__["a" /* ClassesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ClassesListComponent);

var _a, _b, _c;
//# sourceMappingURL=classes-list.component.js.map

/***/ }),

/***/ "./src/client/src/app/classes/classes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/classes/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title><md-icon>accessibility</md-icon>&nbsp;Yoga Classes</md-card-title>\n    <md-card-subtitle>Beginner and Advanced</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    We offer public and private classes.\n  </md-card-content>\n  <md-card-actions>\n    <button md-button color=\"accent\" routerLink=\"/classes/list\">View Classes</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "./src/client/src/app/classes/classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassesComponent = (function () {
    function ClassesComponent() {
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent.prototype.openClassList = function () {
    };
    return ClassesComponent;
}());
ClassesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-classes',
        template: __webpack_require__("./src/client/src/app/classes/classes.component.html"),
        styles: [__webpack_require__("./src/client/src/app/classes/classes.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClassesComponent);

//# sourceMappingURL=classes.component.js.map

/***/ }),

/***/ "./src/client/src/app/classes/classes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes__ = __webpack_require__("./src/shared/classes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__ = __webpack_require__("./src/client/src/app/util/recieve-api-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassesService = (function () {
    function ClassesService(http) {
        this.http = http;
    }
    ClassesService.prototype.loadAllClasses = function () {
        return this.http.get('/api/class')
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["a" /* receiveApiData */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_classes__["a" /* createClasses */]);
    };
    ClassesService.prototype.createClass = function (classEntry) {
        return this.http.post('/api/class', classEntry)
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_classes__["b" /* createClass */]);
    };
    ClassesService.prototype.saveClass = function (id, classEntry) {
        return this.http.patch("/api/class/" + id, classEntry)
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_classes__["b" /* createClass */]);
    };
    ClassesService.prototype.findClassById = function (id) {
        return this.http.get("/api/class/" + id)
            .map(__WEBPACK_IMPORTED_MODULE_3__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_classes__["b" /* createClass */]);
    };
    return ClassesService;
}());
ClassesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClassesService);

var _a;
//# sourceMappingURL=classes.service.js.map

/***/ }),

/***/ "./src/client/src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  max-width: 400px;\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>Work of Art Yoga</md-card-title>\n    <md-card-subtitle>Home is where the soul resides.</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"/assets/img/ripples.png\"  />\n  <md-card-content>\n    <p>Images are powerful medicine for the soul and when we tend to and heal our bodies\n      our minds become clear.</p>\n    <p>A quote from the image on the drum.</p>\n    <blockquote>\n      \"The things we do during our life ripples through eternity.\"\n      <cite>Sonya Holy Eagle</cite>\n    </blockquote>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button color=\"accent\" routerLink=\"/classes\" >CLASSES</button>\n    <button md-button color=\"accent\" routerLink=\"/person\" >PEOPLE</button>\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ "./src/client/src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-home',
        template: __webpack_require__("./src/client/src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/client/src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/client/src/app/person/person-detail/person-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/person/person-detail/person-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>{{person?.firstName}} {{person?.lastName}}</md-card-title>\n    <md-card-subtitle>{{person?.alias}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <p>{{person?.bio}}</p>\n\n    <p>{{person?.email}}</p>\n    <p>{{person?.phone}}</p>\n  </md-card-content>\n\n  <md-card-actions>\n    <button md-button color=\"accent\" routerLink=\"/person/edit/{{person?.id}}\">EDIT</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "./src/client/src/app/person/person-detail/person-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_service__ = __webpack_require__("./src/client/src/app/person/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_handle_error__ = __webpack_require__("./src/client/src/app/util/handle-error.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonDetailComponent = (function () {
    function PersonDetailComponent(service, router, route) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        var id = route.snapshot.params['id'];
        service.personFindById(parseInt(id))
            .subscribe(function (person) { return _this.person = person; }, function (err) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_handle_error__["a" /* handleError */])('ERR-PD-010', err); });
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
    };
    return PersonDetailComponent;
}());
PersonDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-person-detail',
        template: __webpack_require__("./src/client/src/app/person/person-detail/person-detail.component.html"),
        styles: [__webpack_require__("./src/client/src/app/person/person-detail/person-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PersonDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=person-detail.component.js.map

/***/ }),

/***/ "./src/client/src/app/person/person-form/person-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.person-form {\n  max-width: 500px;\n}\n\n.person-full-width {\n  width: 100%;\n}\n\nform textarea {\n  width: 100%;\n  resize: none;\n}\n\n.field-error-message {\n  text-align: right;\n  padding-right: 68px;\n  font-size: 16px;\n  color: #a10000;\n}\n\nform fieldset {\n  margin-bottom: 20px;\n  border-radius: 3px;\n  border-color: rgba(0,0,0,0.5);\n}\n\nform legend {\n  border-radius: 4px;\n  color: rgba(0,0,0,.5);\n}\n\nform button {\n  margin-left: 25px;\n}\n\nform button[type='submit'] {\n  margin-left: 75px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/person/person-form/person-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"personForm\" #pf=\"ngForm\" class=\"person-form\" autocomplete=\"off\" novalidate >\n  <fieldset>\n    <legend>Enter/Edit</legend>\n    <table class=\"person-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <md-input-container class=\"person-full-width\">\n            <input mdInput formControlName=\"firstName\" placeholder=\"First\" >\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container class=\"person-full-width\">\n            <input mdInput formControlName=\"lastName\" placeholder=\"Last\" >\n          </md-input-container>\n        </td>\n      </tr>\n    </table>\n\n    <md-input-container class=\"person-full-width\">\n      <input mdInput formControlName=\"alias\" placeholder=\"Alias\">\n    </md-input-container>\n\n    <md-input-container class=\"person-full-width\">\n      <input mdInput formControlName=\"email\" placeholder=\"Email\">\n    </md-input-container>\n\n    <md-input-container class=\"person-full-width\">\n      <textarea mdInput formControlName=\"bio\" placeholder=\"Bio\" rows=\"5\"></textarea>\n    </md-input-container>\n\n    <md-input-container class=\"person-full-width\">\n      <input mdInput formControlName=\"phone\" placeholder=\"Phone\">\n    </md-input-container>\n\n    <md-input-container class=\"person-full-width\">\n      <input mdInput type=\"\" formControlName=\"website\" placeholder=\"Website\">\n    </md-input-container>\n\n    <md-input-container class=\"person-full-width\">\n      <input mdInput type=\"\" formControlName=\"imageUrl\" placeholder=\"Image Url\">\n    </md-input-container>\n\n  </fieldset>\n  <button md-button (click)=\"cancel()\">Cancel</button>\n  <button md-button color=\"accent\" type=\"submit\" (click)=\"save()\" [disabled]=\"!pf.valid\">Save</button>\n</form>\n\n<!--<div class=\"debug\">-->\n  <!--<h3>Debug Person:</h3>-->\n  <!--{{ person | json }}-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/client/src/app/person/person-form/person-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_person__ = __webpack_require__("./src/shared/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_service__ = __webpack_require__("./src/client/src/app/person/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_handle_error__ = __webpack_require__("./src/client/src/app/util/handle-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonFormComponent = (function () {
    function PersonFormComponent(fb, service, router, route) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.route = route;
        this.navBack = ['person', 'list'];
        try {
            var id = route.snapshot.params['id'];
            if (id) {
                this.setPerson(parseInt(id));
            }
            else {
                this.setPerson(-1);
            }
        }
        catch (err) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */])('ERR-052', err);
        }
    }
    PersonFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    PersonFormComponent.prototype.setPerson = function (id) {
        var _this = this;
        this.personId = id;
        this.person = {
            id: -1,
            alias: '',
            bio: '',
            email: '',
            firstName: '',
            imageUrl: '',
            lastName: '',
            phone: '',
            website: ''
        };
        if (id !== -1) {
            this.service.personFindById(this.personId)
                .subscribe(function (person) {
                _this.person = person;
                _this.personForm.setValue(formValues(_this.person));
            }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-051'));
        }
    };
    PersonFormComponent.prototype.initForm = function () {
        var _this = this;
        this.personForm = this.fb.group({
            alias: [this.person.alias],
            bio: [this.person.bio],
            email: [this.person.email, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].email]],
            firstName: [this.person.firstName, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            imageUrl: [this.person.imageUrl],
            lastName: [this.person.lastName, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]],
            phone: [this.person.phone],
            website: [this.person.website]
        });
        this.personForm.valueChanges
            .filter(function () { return _this.personForm.valid; }) // only want to see changes on valid values
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_person__["b" /* createPerson */]) // transform the formValue into an address
            .subscribe(function (person) {
            _this.person = person;
            _this.person.id = _this.personId;
        });
    };
    PersonFormComponent.prototype.save = function () {
        var _this = this;
        if (this.personId === -1) {
            this.service.personCreate(this.person)
                .subscribe(function (person) { return _this.router.navigate(_this.navBack); }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-053'));
        }
        else {
            this.service.personUpdate(this.person.id, this.person)
                .subscribe(function (person) { return _this.router.navigate(_this.navBack); }, __WEBPACK_IMPORTED_MODULE_0_lodash__["partial"](__WEBPACK_IMPORTED_MODULE_5__util_handle_error__["a" /* handleError */], 'ERR-054'));
        }
    };
    PersonFormComponent.prototype.cancel = function () {
        this.router.navigate(this.navBack);
    };
    return PersonFormComponent;
}());
PersonFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'dd-person-form',
        template: __webpack_require__("./src/client/src/app/person/person-form/person-form.component.html"),
        styles: [__webpack_require__("./src/client/src/app/person/person-form/person-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__person_service__["a" /* PersonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], PersonFormComponent);

function formValues(_a) {
    var alias = _a.alias, bio = _a.bio, email = _a.email, firstName = _a.firstName, imageUrl = _a.imageUrl, lastName = _a.lastName, phone = _a.phone, website = _a.website;
    return { alias: alias, bio: bio, email: email, firstName: firstName, imageUrl: imageUrl, lastName: lastName, phone: phone, website: website };
}
var _a, _b, _c, _d;
//# sourceMappingURL=person-form.component.js.map

/***/ }),

/***/ "./src/client/src/app/person/person-list/person-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".remove {\n  color: red;\n}\n\n.center {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: justify;\n}\n\n.list-button {\n  float: right;\n  opacity: 0.6;\n}\n\n.menu-button {\n  float: right;\n}\n\nmd-card {\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/person/person-list/person-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let person of people\" (click)=\"select(person)\" >\n  <md-card-header>\n    <md-card-title>{{person.firstName}} {{person.lastName}}</md-card-title>\n    <md-card-subtitle>{{person.alias}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <p>{{person.bio}}</p>\n    <p>{{person.email}}</p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button color=\"accent\" (click)=\"edit(person)\">EDIT</button>\n    <button md-button color=\"accent\" (click)=\"select(person)\">DETAILS</button>\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ "./src/client/src/app/person/person-list/person-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_service__ = __webpack_require__("./src/client/src/app/person/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_handle_error__ = __webpack_require__("./src/client/src/app/util/handle-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonListComponent = (function () {
    function PersonListComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.service.peopleGetAll()
            .subscribe(function (people) { return _this.people = people; }, function (err) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_handle_error__["a" /* handleError */])('ERR-PL-010', err); });
    }
    PersonListComponent.prototype.ngOnInit = function () {
    };
    PersonListComponent.prototype.select = function (person) {
        this.router.navigate(['person', 'detail', person.id]);
    };
    PersonListComponent.prototype.edit = function (person) {
        this.router.navigate(['person/edit', person.id]);
    };
    return PersonListComponent;
}());
PersonListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-person-list',
        template: __webpack_require__("./src/client/src/app/person/person-list/person-list.component.html"),
        styles: [__webpack_require__("./src/client/src/app/person/person-list/person-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PersonListComponent);

var _a, _b;
//# sourceMappingURL=person-list.component.js.map

/***/ }),

/***/ "./src/client/src/app/person/person-route-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_list_person_list_component__ = __webpack_require__("./src/client/src/app/person/person-list/person-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_form_person_form_component__ = __webpack_require__("./src/client/src/app/person/person-form/person-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_person_component__ = __webpack_require__("./src/client/src/app/person/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_detail_person_detail_component__ = __webpack_require__("./src/client/src/app/person/person-detail/person-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return personRouteConfig; });




var personRouteConfig = [
    {
        path: 'person',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__person_person_component__["a" /* PersonComponent */]
            },
            {
                path: 'detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__person_detail_person_detail_component__["a" /* PersonDetailComponent */]
            },
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_0__person_list_person_list_component__["a" /* PersonListComponent */]
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_1__person_form_person_form_component__["a" /* PersonFormComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__person_form_person_form_component__["a" /* PersonFormComponent */]
            }
        ]
    }
];
//# sourceMappingURL=person-route-config.js.map

/***/ }),

/***/ "./src/client/src/app/person/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_recieve_api_data__ = __webpack_require__("./src/client/src/app/util/recieve-api-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_person__ = __webpack_require__("./src/shared/person.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.peopleGetAll = function () {
        return this.http.get('/api/person')
            .map(__WEBPACK_IMPORTED_MODULE_2__util_recieve_api_data__["a" /* receiveApiData */])
            .map(__WEBPACK_IMPORTED_MODULE_3__shared_person__["a" /* createPeople */]);
    };
    PersonService.prototype.personFindById = function (id) {
        return this.http.get("/api/person/" + id)
            .map(__WEBPACK_IMPORTED_MODULE_2__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_3__shared_person__["b" /* createPerson */]);
    };
    PersonService.prototype.personCreate = function (person) {
        return this.http.post('/api/person', person)
            .map(__WEBPACK_IMPORTED_MODULE_2__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_3__shared_person__["b" /* createPerson */]);
    };
    PersonService.prototype.personUpdate = function (id, person) {
        return this.http.patch("/api/person/" + id, person)
            .map(__WEBPACK_IMPORTED_MODULE_2__util_recieve_api_data__["b" /* receiveApiDatum */])
            .map(__WEBPACK_IMPORTED_MODULE_3__shared_person__["b" /* createPerson */]);
    };
    return PersonService;
}());
PersonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PersonService);

var _a;
//# sourceMappingURL=person.service.js.map

/***/ }),

/***/ "./src/client/src/app/person/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/client/src/app/person/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>People</md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <p>A person can be either student or teachers.</p>\n  </md-card-content>\n  <md-card-actions>\n    <button md-button color=\"accent\" routerLink=\"/person/list\">VIEW LIST</button>\n    <button md-button color=\"accent\" routerLink=\"/person/create\">CREATE</button>\n  </md-card-actions>\n</md-card>\n\n"

/***/ }),

/***/ "./src/client/src/app/person/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'dd-person',
        template: __webpack_require__("./src/client/src/app/person/person/person.component.html"),
        styles: [__webpack_require__("./src/client/src/app/person/person/person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);

//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "./src/client/src/app/util/handle-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
function handleError(errCode, err) {
    console.error(errCode, err);
}
//# sourceMappingURL=handle-error.js.map

/***/ }),

/***/ "./src/client/src/app/util/recieve-api-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = receiveApiDatum;
/* harmony export (immutable) */ __webpack_exports__["a"] = receiveApiData;
function receiveApiDatum(data) {
    return data.json().data;
}
function receiveApiData(data) {
    return data.json().data;
}
//# sourceMappingURL=recieve-api-data.js.map

/***/ }),

/***/ "./src/client/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/client/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/client/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/client/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/shared/classes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = createClasses;
function createClass(_a) {
    var id = _a.id, description = _a.description, duration = _a.duration, icon = _a.icon, imageUrl = _a.imageUrl, audience = _a.audience, summary = _a.summary, tags = _a.tags, title = _a.title;
    return { id: id, description: description, duration: duration, icon: icon, imageUrl: imageUrl, audience: audience, summary: summary, tags: tags, title: title };
}
function createClasses(obj) {
    return obj.map(createClass);
}
//# sourceMappingURL=classes.js.map

/***/ }),

/***/ "./src/shared/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createPerson;
/* harmony export (immutable) */ __webpack_exports__["a"] = createPeople;
function createPerson(_a) {
    var id = _a.id, alias = _a.alias, bio = _a.bio, email = _a.email, firstName = _a.firstName, imageUrl = _a.imageUrl, lastName = _a.lastName, phone = _a.phone, website = _a.website;
    return { id: id, alias: alias, bio: bio, email: email, firstName: firstName, imageUrl: imageUrl, lastName: lastName,
        phone: phone, website: website };
}
function createPeople(obj) {
    return obj.map(createPerson);
}
//# sourceMappingURL=person.js.map

/***/ }),

/***/ "./src/shared/postal-address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createAddress;
/* harmony export (immutable) */ __webpack_exports__["a"] = createAddresses;
function createAddress(_a) {
    var id = _a.id, city = _a.city, label = _a.label, pobox = _a.pobox, postalCode = _a.postalCode, state = _a.state, street1 = _a.street1, street2 = _a.street2;
    return { id: id, city: city, label: label, pobox: pobox, postalCode: postalCode, state: state, street1: street1, street2: street2 };
}
function createAddresses(data) {
    return data.map(createAddress);
}
//# sourceMappingURL=postal-address.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/client/src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map