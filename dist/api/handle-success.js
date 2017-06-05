"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleSuccess(res, next, data) {
    res.json(200, { data: data });
    return next();
}
exports.handleSuccess = handleSuccess;

//# sourceMappingURL=handle-success.js.map
