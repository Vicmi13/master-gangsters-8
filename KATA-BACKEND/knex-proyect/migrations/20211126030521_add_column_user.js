exports.up = function (knex) {
  return knex.schema.table("shoes", (table) => {
    table.boolean("is_active").defaultTo(false);
  });
};

exports.down = function (knex) {};
