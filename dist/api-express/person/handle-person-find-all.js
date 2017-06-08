"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_person_find_all_1 = require("../../query/person/query-person-find-all");
function handlePersonFindAll(req, res, next) {
    query_person_find_all_1.queryPersonFindAll()
        .then(_.partial(handle_success_1.handleSuccess, res))
        .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-011', 'Could not find all people', err); });
}
exports.handlePersonFindAll = handlePersonFindAll;
