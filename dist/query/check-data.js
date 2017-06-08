"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_logger_1 = require("../common/create-logger");
var log = create_logger_1.createLogger('check-data');
//
// Assume all data has an id associated with it.
function checkData(data) {
    if (Array.isArray(data)) {
        checkData(data[0]);
    }
    else {
        if (data.id === undefined) {
            var msg1 = '{ data.id } undefined';
            log.error(msg1);
            throw Error(msg1);
        }
        else if (data.id === null) {
            var msg2 = '{ data.id } null';
            log.error(msg2);
            throw Error(msg2);
        }
    }
}
exports.checkData = checkData;
