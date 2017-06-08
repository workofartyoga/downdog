"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_logger_1 = require("../common/create-logger");
var create_error_message_1 = require("../create-error-message");
var log = create_logger_1.createLogger('handle-api-express-error');
function handleApiError(res, errCode, errMessage, err) {
    var errObj = create_error_message_1.createErrorMessage(errCode, errMessage);
    log.error(errObj, err);
    res.status(500).json(errObj);
}
exports.handleApiError = handleApiError;
