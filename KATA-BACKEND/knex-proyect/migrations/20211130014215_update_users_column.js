exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    table.renameColumn("edad", "age");
  });
};

exports.down = function (knex) {};
