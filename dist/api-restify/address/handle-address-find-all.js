"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var query_address_find_all_1 = require("../../query/address/query-address-find-all");
var handle_error_1 = require("../handle-error");
function handleAddressFindAll(req, res, next) {
    query_address_find_all_1.queryAddressFindAll()
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(res, next, 'ERR-011', 'Could not find all addresses', err); });
}
exports.handleAddressFindAll = handleAddressFindAll;
