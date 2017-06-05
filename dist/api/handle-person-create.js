"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_person_create_1 = require("../query/query-person-create");
function handlePersonCreate(req, res, next) {
    query_person_create_1.queryPersonCreate(req.body)
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-010', 'Could not create person', err); });
}
exports.handlePersonCreate = handlePersonCreate;
