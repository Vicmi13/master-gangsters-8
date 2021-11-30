// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

const genericModelKnex = require("../utils/GenericKnex");

const table = "users";
const columns = [
  "id",
  "first_name",
  "last_name",
  "second_last_name",
  "phone_number",
  "age",
  "email",
  "id_genres",
  "id_shoes",
  "is_active",
  "password",
];
const tableId = "id";

const Shoe = genericModelKnex(knexInstance, table, columns, tableId);

module.exports = Shoe;
