"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_error_1 = require("../handle-error");
var query_person_find_by_id_1 = require("../../query/person/query-person-find-by-id");
var parse_params_id_1 = require("../../parse-params-id");
function handlePersonFindById(req, res, next) {
    query_person_find_by_id_1.queryPersonFindById(parse_params_id_1.paramsId(req.params))
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(res, next, 'ERR-012', 'Could not find person', err); });
}
exports.handlePersonFindById = handlePersonFindById;
