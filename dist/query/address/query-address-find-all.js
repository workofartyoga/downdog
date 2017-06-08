"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var postal_address_1 = require("../../shared/postal-address");
function queryAddressFindAll() {
    return model_1.Addresses.findAll({ order: ['state', 'city', 'postalCode', 'street1'] })
        .then(postal_address_1.createAddresses);
}
exports.queryAddressFindAll = queryAddressFindAll;
