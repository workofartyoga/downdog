"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var person_1 = require("../shared/person");
var query_person_update_1 = require("../query/query-person-update");
function handlePersonUpdate(req, res, next) {
    query_person_update_1.queryPersonUpdate(parseInt(req.params.id), person_1.createPerson(req.body))
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-013', 'Could not update person', err); });
}
exports.handlePersonUpdate = handlePersonUpdate;
