// Update with your config settings.
require("dotenv").config();

// $ knex init  nos crea este archivo para las conexciones en 3 ambientess diferentes

const HOST = process.env.HOST;
const PORT_DB = process.env.PORT_DB;
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const DATABASE = process.env.DATABASE;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: HOST,
      port: PORT_DB,
      user: USER_DB,
      password: PASSWORD_DB,
      database: DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  // Deben de ser  datos mas parecidos a production
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
      host: "localhost",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // bases de datos real DANGER !!!!!
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
