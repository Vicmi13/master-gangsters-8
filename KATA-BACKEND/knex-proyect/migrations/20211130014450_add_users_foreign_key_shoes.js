exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    //table.integer("id_genres").references("genres.id");
    table.integer("id_shoes").references("shoes.shoe_id");
  });
};

exports.down = function (knex) {};
