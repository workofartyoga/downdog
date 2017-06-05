"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_person_find_by_id_1 = require("../query/query-person-find-by-id");
function handlePersonFindById(req, res, next) {
    query_person_find_by_id_1.queryPersonFindById(req.params.id)
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-012', 'Could not find person', err); });
}
exports.handlePersonFindById = handlePersonFindById;
