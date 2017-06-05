"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAddress(_a) {
    var id = _a.id, city = _a.city, label = _a.label, pobox = _a.pobox, postalCode = _a.postalCode, state = _a.state, street1 = _a.street1, street2 = _a.street2;
    return { id: id, city: city, label: label, pobox: pobox, postalCode: postalCode, state: state, street1: street1, street2: street2 };
}
exports.createAddress = createAddress;
function createAddresses(data) {
    return data.map(createAddress);
}
exports.createAddresses = createAddresses;

//# sourceMappingURL=postal-address.js.map
