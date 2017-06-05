"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_class_find_by_id_1 = require("../query/query-class-find-by-id");
function handleClassFindById(req, res, next) {
    query_class_find_by_id_1.queryClassFindById(parseInt(req.params.id, 10))
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-042', 'Could not find class by id', err); });
}
exports.handleClassFindById = handleClassFindById;

//# sourceMappingURL=handle-class-find-by-id.js.map
