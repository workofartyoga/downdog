"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var dotenv = require("dotenv");
var _ = require("lodash");
var sql_logging_options_1 = require("./sql-logging-options");
var create_logger_1 = require("../common/create-logger");
var handle_model_error_1 = require("./handle-model-error");
var init_address_1 = require("./init-address");
var test_address_1 = require("./initialize/test-address");
var init_person_1 = require("./init-person");
var test_people_1 = require("./initialize/test-people");
var init_classes_1 = require("./init-classes");
var test_classes_1 = require("./initialize/test-classes");
dotenv.config();
var log = create_logger_1.createLogger('downdog-db');
var dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/downdog-test';
var sequelize = new ORM(dbUrl, sql_logging_options_1.loggingOptions);
exports.Addresses = init_address_1.initAddress(sequelize);
exports.People = init_person_1.initPerson(sequelize);
exports.Classes = init_classes_1.initClasses(sequelize);
exports.People.hasMany(exports.Addresses, { as: 'address' });
// if ( !dbUrl.endsWith('-test')) {
//   sequelize.sync()
//     .then( () => {
//       log.debug( 'synced!');
//     })
//     .catch( _.partial( handleModelError, 'ERR-MODEL-SYNC') );
// } else {
log.info('begin db initialization');
// sequelize.sync({force: true, match: /-test})
sequelize.sync({ force: true })
    .then(function () {
    return test_address_1.testAddress();
})
    .then(function () {
    return test_people_1.testPeople();
})
    .then(function () {
    return test_classes_1.testClasses();
})
    .then(function () {
    log.info('complete db initialization');
})
    .catch(_.partial(handle_model_error_1.handleModelError, 'ERR-MODEL-TEST-SYNC'));
// }
