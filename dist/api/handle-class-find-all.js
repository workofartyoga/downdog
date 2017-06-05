"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var query_class_find_all_1 = require("../query/query-class-find-all");
var handle_error_1 = require("./handle-error");
function handleClassFindAll(req, res, next) {
    query_class_find_all_1.queryClassFindAll()
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-041', 'Could not find all classes', err); });
}
exports.handleClassFindAll = handleClassFindAll;
