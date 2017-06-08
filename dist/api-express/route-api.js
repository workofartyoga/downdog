"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var route_address_1 = require("./address/route-address");
var route_person_1 = require("./person/route-person");
var route_classes_1 = require("./classes/route-classes");
function routeApi() {
    var apiRouter = express.Router();
    apiRouter.use('/address', route_address_1.routeAddress());
    apiRouter.use('/person', route_person_1.routePerson());
    apiRouter.use('/classes', route_classes_1.routeClasses());
    return apiRouter;
}
exports.routeApi = routeApi;
