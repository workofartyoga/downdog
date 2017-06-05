"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var person_1 = require("../shared/person");
function queryPersonCreate(person) {
    return model_1.People.create(person)
        .then(person_1.createPerson);
}
exports.queryPersonCreate = queryPersonCreate;
