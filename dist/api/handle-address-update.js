"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var postal_address_1 = require("../shared/postal-address");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_address_update_1 = require("../query/query-address-update");
function handleAddressUpdate(req, res, next) {
    var errMsg = 'Could not update address';
    try {
        //
        // Check to make sure client is sending the same ID
        // and that the ID is valid
        //
        var address_id = parseInt(req.params.id, 10);
        var address = postal_address_1.createAddress(req.body);
        if (address_id !== address.id) {
            handle_error_1.handleError(req, res, next, 'ERR-013', errMsg, null);
        }
        if (typeof address.id === 'undefined' || address.id === -1) {
            handle_error_1.handleError(req, res, next, 'ERR-014', errMsg, null);
        }
        return query_address_update_1.queryAddressUpdate(address)
            .then(_.partial(handle_success_1.handleSuccess, res, next))
            .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-015', errMsg, err); });
    }
    catch (err) {
        handle_error_1.handleError(req, res, next, 'ERR-016', errMsg, err);
    }
}
exports.handleAddressUpdate = handleAddressUpdate;
