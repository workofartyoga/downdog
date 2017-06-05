"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require('human-readable-ids').hri;
var restify_1 = require("restify");
function handleError(req, res, next, errCode, errMessage, err) {
    var errId = hri.random();
    var error = err || '';
    req.log.error('Database error occurred', errId, errCode, error);
    var errISE = new restify_1.InternalServerError(error, errId + " " + errCode + " " + errMessage);
    res.json(500, { error: errCode, message: errId + " " + errMessage });
    return next(errISE);
}
exports.handleError = handleError;

//# sourceMappingURL=handle-error.js.map
