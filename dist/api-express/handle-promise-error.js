"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_logger_1 = require("../common/create-logger");
var create_error_message_1 = require("../create-error-message");
var log = create_logger_1.createLogger('handle-promise-error');
function handlePromiseError(res, errCode, message, err) {
    var errObj = create_error_message_1.createErrorMessage(errCode, message);
    log.error(errObj, err);
    res.status(500).json(errObj);
}
exports.handlePromiseError = handlePromiseError;
