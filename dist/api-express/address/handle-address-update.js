"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handle_success_1 = require("../handle-success");
var handle_promise_error_1 = require("../handle-promise-error");
var query_address_update_1 = require("../../query/address/query-address-update");
var check_id_1 = require("../check-id");
function handleAddressUpdate(req, res, next) {
    var errMsg = 'Could not update address';
    if (check_id_1.checkId(req, res, errMsg)) {
        return query_address_update_1.queryAddressUpdate(req.body)
            .then(_.partial(handle_success_1.handleSuccess, res))
            .catch(function (err) { return handle_promise_error_1.handlePromiseError(res, 'ERR-015', errMsg, err); });
    }
}
exports.handleAddressUpdate = handleAddressUpdate;
