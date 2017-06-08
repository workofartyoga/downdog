"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_class_find_by_id_1 = require("../../query/classes/query-class-find-by-id");
var parse_params_id_1 = require("../../parse-params-id");
function handleClassFindById(req, res, next) {
    query_class_find_by_id_1.queryClassFindById(parse_params_id_1.paramsId(req.params))
        .then(_.partial(handle_success_1.handleSuccess, res))
        .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-042', 'Could not find class by id', err); });
}
exports.handleClassFindById = handleClassFindById;
