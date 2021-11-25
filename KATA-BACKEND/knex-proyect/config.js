const knex = require("knex");

const knexfile = require("./knexfile");
const env = process.env.NODE_ENV;

// knexfile.atributo

// knexfile['development']
// knexfile['staging']
// knexfile['production']

// Aqui van las credenciales para conectarnos a la bd
const knexInstance = knex(knexfile[env]);

module.exports = knexInstance;
