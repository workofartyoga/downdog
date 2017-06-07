"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var classes_1 = require("../shared/classes");
var query_class_create_1 = require("../query/query-class-create");
function handleClassCreate(req, res, next) {
    query_class_create_1.queryClassCreate(classes_1.createClass(req.body))
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-040', 'Could not create new class', err); });
}
exports.handleClassCreate = handleClassCreate;
