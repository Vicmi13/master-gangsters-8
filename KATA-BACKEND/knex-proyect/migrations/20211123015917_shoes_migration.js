exports.up = async (knex) => {
  await knex.schema.createTable("shoes", (table) => {
    table.increments("shoe_id").primary();
    table.string("description");
    table.boolean("sold").defaultTo(false);
    table.decimal("quantity");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("shoes");
};

// Correr migrations up  knex migrate:latest

// Correr migrations down knex migrate:rollback
