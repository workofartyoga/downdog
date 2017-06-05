"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function queryAddressUpdate(address) {
    return model_1.Addresses.update(address, { where: { id: address.id } });
}
exports.queryAddressUpdate = queryAddressUpdate;

//# sourceMappingURL=query-address-update.js.map
