"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var restify = require("restify");
var path = require("path");
var restify_1 = require("restify");
var create_logger_1 = require("./common/create-logger");
var init_api_1 = require("./api/init-api");
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
app.get(/\/?.*/, restify.serveStatic({
    directory: path.join(__dirname, 'client'),
    default: 'index.html'
}));
//
// Routes
//
init_api_1.initApi(app);
// Audit Logging
app.on('after', restify.auditLogger({ log: create_logger_1.createLogger('downdog-audit') }));
app.listen(PORT, function () {
    app.log.info(app.name + " listening on " + app.url);
});

//# sourceMappingURL=app.js.map
