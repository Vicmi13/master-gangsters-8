exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    table.boolean("is_active").defaultTo(true);
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {};
