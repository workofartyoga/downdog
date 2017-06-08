"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var query_person_find_by_id_1 = require("./query-person-find-by-id");
function queryPersonUpdate(person) {
    return model_1.People.update(person, { where: { id: person.id } })
        .then(function (res) { return query_person_find_by_id_1.queryPersonFindById(res[0]); });
}
exports.queryPersonUpdate = queryPersonUpdate;
