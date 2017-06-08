"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var query_address_find_all_1 = require("../../query/address/query-address-find-all");
var handle_promise_error_1 = require("../handle-promise-error");
function handleAddressFindAll(req, res, next) {
    query_address_find_all_1.queryAddressFindAll()
        .then(_.partial(handle_success_1.handleSuccess, res))
        .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-011', 'Could not find all addresses', err); });
}
exports.handleAddressFindAll = handleAddressFindAll;
