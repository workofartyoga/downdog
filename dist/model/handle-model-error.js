"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_logger_1 = require("../common/create-logger");
var log = create_logger_1.createLogger('model-error');
function handleModelError(errCode, err) {
    log.error(errCode, err);
}
exports.handleModelError = handleModelError;

//# sourceMappingURL=handle-model-error.js.map
