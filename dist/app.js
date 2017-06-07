"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var restify = require("restify");
var restify_1 = require("restify");
var create_logger_1 = require("./common/create-logger");
var init_api_1 = require("./api/init-api");
var init_static_files_1 = require("./init-static-files");
dotenv.config();
var APP_NAME = process.env.APP_NAME || 'downdog-app';
var PORT = process.env.PORT || 3000;
var options = { name: APP_NAME };
// for testing purposes
var app = restify_1.createServer(options);
app.log = create_logger_1.createLogger(APP_NAME);
//
// Middleware
//
app.use(restify.acceptParser(['application/json'])); // only accept json requests
app.use(restify.gzipResponse());
app.use(restify.bodyParser());
var throttleOptions = {
    burst: 100, ip: true, overrides: { '192.168.1.1': { burst: 0, rate: 0 } }, rate: 50
};
app.use(restify.throttle(throttleOptions));
app.use(restify.requestLogger()); // add a req.log entry
//
// Routes
//
init_api_1.initApi(app);
//
// order of preference
// hit the /api routes first
init_static_files_1.initStaticFiles(app);
// Audit Logging
app.on('after', restify.auditLogger({ log: create_logger_1.createLogger('downdog-audit') }));
app.listen(PORT, function () {
    app.log.info(app.name + " listening on " + app.url);
});
