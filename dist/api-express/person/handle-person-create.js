"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_person_create_1 = require("../../query/person/query-person-create");
var person_1 = require("../../shared/person");
function handlePersonCreate(req, res, next) {
    query_person_create_1.queryPersonCreate(person_1.createPerson(req.body))
        .then(_.partial(handle_success_1.handleSuccess, res))
        .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-010', 'Could not create person', err); });
}
exports.handlePersonCreate = handlePersonCreate;
