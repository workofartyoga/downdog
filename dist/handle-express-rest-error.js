"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_logger_1 = require("./common/create-logger");
var log = create_logger_1.createLogger('handle-rest-error');
function handleRestError(err, req, res, next) {
    log.error(err);
    res.status(500).json({ error: "Server Error" });
}
exports.handleRestError = handleRestError;
