"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var query_address_create_1 = require("../../query/address/query-address-create");
var handle_success_1 = require("../handle-success");
var handle_error_1 = require("../handle-error");
function handleAddressCreate(req, res, next) {
    return query_address_create_1.queryAddressCreate(req.body)
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(res, next, 'ERR-010', 'Could not create address', err); });
}
exports.handleAddressCreate = handleAddressCreate;
