"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan = require("bunyan");
var logger_options_1 = require("./logger-options");
function createLogger(name) {
    var logOptions = logger_options_1.createLoggerOptions(name);
    return bunyan.createLogger(logOptions);
}
exports.createLogger = createLogger;
