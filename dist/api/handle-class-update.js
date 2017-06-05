"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_class_update_1 = require("../query/query-class-update");
function handleClassUpdate(req, res, next) {
    return query_class_update_1.queryClassUpdate(req.body)
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-043', 'Could not update class', err); });
}
exports.handleClassUpdate = handleClassUpdate;
