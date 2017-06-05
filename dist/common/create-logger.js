"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan = require("bunyan");
function createLogger(name) {
    return bunyan.createLogger({ name: name, stream: process.stdout });
}
exports.createLogger = createLogger;

//# sourceMappingURL=create-logger.js.map
