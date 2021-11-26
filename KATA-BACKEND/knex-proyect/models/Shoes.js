// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

const genericModelKnex = require("../utils/GenericKnex");

const table = "shoes";
const columns = [
  "shoe_id",
  "description",
  "sold",
  "quantity",
  "created_at",
  "updated_at",
];
const tableId = "shoe_id";

const Shoe = genericModelKnex(knexInstance, table, columns, tableId);

module.exports = Shoe;
