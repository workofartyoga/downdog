"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_data_1 = require("../query/check-data");
function handleSuccess(res, next, data) {
    check_data_1.checkData(data);
    res.json(200, { data: data });
    return next();
}
exports.handleSuccess = handleSuccess;
