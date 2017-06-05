"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_address_find_by_id_1 = require("../query/query-address-find-by-id");
function handleAddressFindById(req, res, next) {
    query_address_find_by_id_1.queryAddressFindById(parseInt(req.params.id))
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-012', 'Could not retrieve address', err); });
}
exports.handleAddressFindById = handleAddressFindById;
