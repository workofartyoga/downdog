"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handle_address_create_1 = require("./handle-address-create");
var handle_address_find_all_1 = require("./handle-address-find-all");
var handle_address_find_by_id_1 = require("./handle-address-find-by-id");
var handle_address_update_1 = require("./handle-address-update");
var handle_class_create_1 = require("./handle-class-create");
var handle_class_find_all_1 = require("./handle-class-find-all");
var handle_class_find_by_id_1 = require("./handle-class-find-by-id");
var handle_class_update_1 = require("./handle-class-update");
var handle_person_create_1 = require("./handle-person-create");
var handle_person_find_all_1 = require("./handle-person-find-all");
var handle_person_find_by_id_1 = require("./handle-person-find-by-id");
var handle_person_update_1 = require("./handle-person-update");
function initApi(app) {
    var api_address = '/api/address';
    app.post(api_address, handle_address_create_1.handleAddressCreate);
    app.get(api_address, handle_address_find_all_1.handleAddressFindAll);
    app.get(api_address + "/:id", handle_address_find_by_id_1.handleAddressFindById);
    app.patch(api_address + "/:id", handle_address_update_1.handleAddressUpdate);
    var api_person = '/api/person';
    app.post(api_person, handle_person_create_1.handlePersonCreate);
    app.get(api_person, handle_person_find_all_1.handlePersonFindAll);
    app.get(api_person + "/:id", handle_person_find_by_id_1.handlePersonFindById);
    app.patch(api_person + "/:id", handle_person_update_1.handlePersonUpdate);
    var api_class = '/api/class';
    app.post(api_class, handle_class_create_1.handleClassCreate);
    app.get(api_class, handle_class_find_all_1.handleClassFindAll);
    app.get(api_class + "/:id", handle_class_find_by_id_1.handleClassFindById);
    app.patch(api_class + "/:id", handle_class_update_1.handleClassUpdate);
}
exports.initApi = initApi;

//# sourceMappingURL=init-api.js.map
