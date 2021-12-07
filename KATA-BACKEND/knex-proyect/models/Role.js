// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

const genericModelKnex = require("../utils/GenericKnex");

const table = "roles";
const columns = ["id", "name"];
const tableId = "id";

const Role = genericModelKnex(knexInstance, table, columns, tableId);

module.exports = Role;
