"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_person_update_1 = require("../../query/person/query-person-update");
var check_id_1 = require("../check-id");
function handlePersonUpdate(req, res, next) {
    var msg = 'Could not update person';
    if (check_id_1.checkId(req, res, msg)) {
        return query_person_update_1.queryPersonUpdate(req.body)
            .then(_.partial(handle_success_1.handleSuccess, res))
            .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-013', msg, err); });
    }
}
exports.handlePersonUpdate = handlePersonUpdate;
