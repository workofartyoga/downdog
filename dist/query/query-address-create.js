"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function queryAddressCreate(address) {
    return model_1.Addresses.create(address);
}
exports.queryAddressCreate = queryAddressCreate;
