"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var query_address_find_by_id_1 = require("./query-address-find-by-id");
function queryAddressUpdate(address) {
    return model_1.Addresses.update(address, { where: { id: address.id } })
        .then(function (res) { return query_address_find_by_id_1.queryAddressFindById(res[0]); });
}
exports.queryAddressUpdate = queryAddressUpdate;
