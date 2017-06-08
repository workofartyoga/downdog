"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan = require("bunyan");
var path = require("path");
function createLoggerOptions(name, level, src) {
    if (level === void 0) { level = 'debug'; }
    if (src === void 0) { src = true; }
    return {
        name: name,
        streams: [{
                level: 'info',
                stream: process.stdout
            }, {
                level: 'debug',
                path: path.join(__dirname, '../../logs/debug-downdog-app.log')
            }],
        level: level,
        serializers: bunyan.stdSerializers,
        src: src
    };
}
exports.createLoggerOptions = createLoggerOptions;
