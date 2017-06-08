"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var postal_address_1 = require("../../shared/postal-address");
function queryAddressCreate(address) {
    return model_1.Addresses.create(address)
        .then(postal_address_1.createAddress);
}
exports.queryAddressCreate = queryAddressCreate;
