// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

// Recuperar el modelo generico
const genericModelKnex = require("../utils/GenericKnex");

const table = "genres";
const columns = ["id", "description"];
const tableId = "id";

const Genre = genericModelKnex(knexInstance, table, columns, tableId);

module.exports = Genre;
