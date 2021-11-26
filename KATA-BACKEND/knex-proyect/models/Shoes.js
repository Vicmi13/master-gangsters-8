// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

const create = (bodyGenre) => {
  // knex regresa una promesa
  return knexInstance("shoes").insert(bodyGenre); // { description: 'male' }
  // OUTPUT insert into `genres` (`description`) values ('male')
};

const getAll = () => {
  return knexInstance("shoes").select(
    "shoe_id",
    "description",
    "sold",
    "quantity",
    "created_at",
    "updated_at"
  );
};

const getById = (id) => {
  // return knexInstance("genres").select("id", "description").where({ id });

  return knexInstance("shoes")
    .where({ shoe_id: id })
    .select("shoe_id", "description", "sold", "quantity", "created_at");
};

const updateById = (id, body) => {
  // console.log("body in model", body);
  // console.log("id", id);
  return knexInstance("shoes").where({ shoe_id: id }).update(body);
};

// Delete FISICO
const deleteById = (id) => {
  return knexInstance("shoes").del().where({ shoe_id: id });
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
