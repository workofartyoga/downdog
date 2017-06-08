"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var handle_person_find_all_1 = require("./handle-person-find-all");
var handle_person_find_by_id_1 = require("./handle-person-find-by-id");
var handle_person_create_1 = require("./handle-person-create");
var handle_person_update_1 = require("./handle-person-update");
function routePerson() {
    var router = express.Router();
    router.get('', handle_person_find_all_1.handlePersonFindAll);
    router.get('/:id', handle_person_find_by_id_1.handlePersonFindById);
    router.post('', handle_person_create_1.handlePersonCreate);
    router.patch('/:id', handle_person_update_1.handlePersonUpdate);
    return router;
}
exports.routePerson = routePerson;
