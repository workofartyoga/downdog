"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../node_modules/@types/bluebird/index.d.ts"/>
var _ = require("lodash");
var handle_success_1 = require("./handle-success");
var handle_error_1 = require("./handle-error");
var query_person_find_all_1 = require("../query/query-person-find-all");
function handlePersonFindAll(req, res, next) {
    query_person_find_all_1.queryPersonFindAll()
        .then(_.partial(handle_success_1.handleSuccess, res, next))
        .catch(function (err) { return handle_error_1.handleError(req, res, next, 'ERR-011', 'Could not find all people', err); });
}
exports.handlePersonFindAll = handlePersonFindAll;

//# sourceMappingURL=handle-person-find-all.js.map
