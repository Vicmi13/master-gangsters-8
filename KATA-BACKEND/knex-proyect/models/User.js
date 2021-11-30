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

const User = genericModelKnex(knexInstance, table, columns, tableId);

User.findAllWithJoins = () => {
  // OTRA FORMA DE HACER EL QUERY
  // return knexInstance
  //   .from(table)
  //   .join("shoes", "users.id_shoes", "=", "shoes.shoe_id");

  return knexInstance(table)
    .join("shoes", "users.id_shoes", "=", "shoes.shoe_id")
    .join("genres", "users.id_genres", "=", "genres.id")
    .select(
      "users.first_name",
      "users.last_name",
      "users.second_last_name",
      "users.email",
      "users.phone_number",
      // "users.is_active",
      "shoes.shoe_id",
      "shoes.description",
      "shoes.is_active",
      "shoes.quantity",
      "genres.id",
      "genres.value"
    );

  /**
   * The join builder can be used to specify joins between tables,
   *  with the first argument being the joining table, the next
   * three arguments being the first join column,
   * the join operator and the second join column, respectively.
   */
};

module.exports = User;
