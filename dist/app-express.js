"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var route_api_1 = require("./api-express/route-api");
var handle_express_rest_error_1 = require("./handle-express-rest-error");
dotenv.config();
var app = express();
var port = process.env.PORT || 3000;
// Setup Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', route_api_1.routeApi());
app.use(handle_express_rest_error_1.handleRestError);
app.use('/', express.static(path.join(__dirname, 'client')));
function redirectRouterUnmatched(req, res) {
    res.sendFile('index.html', { root: '.' });
}
app.use(redirectRouterUnmatched);
app.listen(port, function () {
    console.log("server running on port: " + port);
});
process.on('warning', function (warning) {
    console.warn("Warning issued NAME: [" + warning.name + "], MESSAGE: [" + warning.message + "], STACK: [" + warning.stack + "]");
});
process.on('unhandledRejection', function (reason, p) {
    console.error("Unhandled Rejection at: " + p + " for reason: " + reason);
});
process.on('uncaughtException', function (err) {
    var errObj = JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner']));
    console.error("Uncaught Exception handled: ", errObj);
});
// test the uncaughtException handler
// nonExistantFunction();
// test the Unhandled Rejection handler
// function SomeRejectResource() {
//   this.loaded = Promise.reject( new Error("Resource not yet loaded"));
// }
// const resource = new SomeRejectResource();
// test the warning handler
// events.defaultMaxListeners = 1;
// process.on('foo', () => {} );
// process.on( 'foo', () => {} );
// process.emitWarning( "This API is deprecated", "DeprecationWarning");
