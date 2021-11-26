exports.up = function (knex) {
  return knex.schema.table("genres", (table) => {
    // Se va a modificar el nombre de columna
    table.renameColumn("description", "value");
  });
};

exports.down = function (knex) {};
