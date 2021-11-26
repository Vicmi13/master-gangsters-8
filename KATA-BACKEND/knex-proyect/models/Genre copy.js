// Se pasa la config || instancia de Knex
const knexInstance = require("../config");

const create = (bodyGenre) => {
  // knex regresa una promesa
  return knexInstance("genres").insert(bodyGenre); // { description: 'male' }
  // OUTPUT insert into `genres` (`description`) values ('male')
};

const getAll = () => {
  return knexInstance("genres").select("id", "description");
};

const getById = (id) => {
  // return knexInstance("genres").select("id", "description").where({ id });
  return knexInstance("genres").where({ id }).select("id", "description");
};

const updateById = (id, body) => {
  // console.log("body in model", body);
  // console.log("id", id);
  return knexInstance("genres").where({ id }).update(body);
};

// Delete FISICO
const deleteById = (id) => {
  return knexInstance("genres").del().where({ id });
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
