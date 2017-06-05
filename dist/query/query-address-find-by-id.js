"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var postal_address_1 = require("../shared/postal-address");
function queryAddressFindById(id) {
    return model_1.Addresses.findById(id)
        .then(postal_address_1.createAddress);
}
exports.queryAddressFindById = queryAddressFindById;
