"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_error_message_1 = require("../create-error-message");
var restify_1 = require("restify");
function handleError(res, next, errCode, errMessage, err) {
    var errObj = create_error_message_1.createErrorMessage(errCode, errMessage);
    var error = err || '';
    var errISE = new restify_1.InternalServerError(error, errObj);
    res.json(500, errObj);
    return next(errISE);
}
exports.handleError = handleError;
