// Update with your config settings.

// $ knex init  nos crea este archivo para las conexciones en 3 ambientess diferentes

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "castor.db.elephantsql.com",
      port: 5432,
      user: "mduzsiod",
      password: "rFY-9CkzU0AtSwbGRWNXFDGGPHNTh1fe",
      database: "mduzsiod",
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
