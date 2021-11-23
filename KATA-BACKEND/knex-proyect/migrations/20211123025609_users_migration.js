exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();

    table.string("first_name");
    table.string("last_name");
    table.string("second_last_name");
    table.string("phone_number");
    table.string("edad");
    table.string("email").unique();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.integer("id_genres").references("genres.id");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("users");
};
