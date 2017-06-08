"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_data_1 = require("../query/check-data");
function handleSuccess(res, data) {
    check_data_1.checkData(data);
    res.status(200).json({ data: data });
}
exports.handleSuccess = handleSuccess;
