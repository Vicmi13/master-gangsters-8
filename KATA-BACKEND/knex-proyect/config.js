const knex = require("knex");

const knexfile = require("./knexfile");
const env = process.env.NODE_ENV;

// knexfile.atributo

// knexfile['development']
// knexfile['staging']
// knexfile['production']

const knexInstance = knex(knexfile[env]);
