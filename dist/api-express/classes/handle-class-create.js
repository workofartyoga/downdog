"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_class_create_1 = require("../../query/classes/query-class-create");
function handleClassCreate(req, res, next) {
    query_class_create_1.queryClassCreate(req.body)
        .then(_.partial(handle_success_1.handleSuccess, res))
        .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-040', 'Could not create new class', err); });
}
exports.handleClassCreate = handleClassCreate;
