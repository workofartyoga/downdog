"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var handle_class_find_all_1 = require("./handle-class-find-all");
var handle_class_find_by_id_1 = require("./handle-class-find-by-id");
var handle_class_create_1 = require("./handle-class-create");
var handle_class_update_1 = require("./handle-class-update");
function routeClasses() {
    var router = express.Router();
    router.get('', handle_class_find_all_1.handleClassFindAll);
    router.get('/:id', handle_class_find_by_id_1.handleClassFindById);
    router.post('', handle_class_create_1.handleClassCreate);
    router.patch('/:id', handle_class_update_1.handleClassUpdate);
    return router;
}
exports.routeClasses = routeClasses;
