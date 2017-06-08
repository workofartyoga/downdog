"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_params_id_1 = require("../parse-params-id");
var handle_error_1 = require("./handle-error");
function createId(_a) {
    var id = _a.id;
    return { id: id };
}
function checkId(req, res, next, errMessage) {
    var id = parse_params_id_1.paramsId(req.params);
    var obj = createId(req.body);
    if (id !== obj.id) {
        handle_error_1.handleError(res, next, "ERR-ID-000", errMessage, 'id != req.body.id');
        return false;
    }
    return true;
}
exports.checkId = checkId;
