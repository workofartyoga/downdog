"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require('human-readable-ids').hri;
function createErrorMessage(errCode, message) {
    return { ids: hri.random(), errCode: errCode, message: message };
}
exports.createErrorMessage = createErrorMessage;
