"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_class_update_1 = require("../../query/classes/query-class-update");
var check_id_1 = require("../check-id");
function handleClassUpdate(req, res, next) {
    var msg = 'Could not update class';
    if (check_id_1.checkId(req, res, msg)) {
        // intentionally not passing classEntry
        return query_class_update_1.queryClassUpdate(req.body)
            .then(_.partial(handle_success_1.handleSuccess, res))
            .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-043', msg, err); });
    }
}
exports.handleClassUpdate = handleClassUpdate;
