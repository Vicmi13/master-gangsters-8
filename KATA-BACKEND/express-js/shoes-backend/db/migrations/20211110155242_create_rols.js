exports.up = async (knex) => {
    await knex.schema.createTable('rols', table => {
      table.increments('id_rol').primary().unsigned()
      table.string('description')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = async (knex) => {
    await knex.schema.dropTable('rols')
}
  
  