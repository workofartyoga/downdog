"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../../model/model");
var query_class_find_by_id_1 = require("./query-class-find-by-id");
function queryClassUpdate(classEntry) {
    return model_1.Classes.update(classEntry, { where: { id: classEntry.id } })
        .then(function (res) { return query_class_find_by_id_1.queryClassFindById(res[0]); });
}
exports.queryClassUpdate = queryClassUpdate;
