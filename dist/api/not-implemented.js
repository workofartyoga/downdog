"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify_1 = require("restify");
function notImplementedError(res, next, info) {
    return next(new restify_1.NotImplementedError(info));
}
exports.notImplementedError = notImplementedError;
