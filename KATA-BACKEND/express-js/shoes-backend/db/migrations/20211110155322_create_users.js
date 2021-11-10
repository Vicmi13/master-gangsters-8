exports.up = async (knex) => {
    await knex.schema.createTable('users', table => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.string('app')
      table.string('apm')
      table.string('email').unique().index()
      table.string('password')
      table.integer('id_rol').unsigned().references('rols.id_rol')
      //.inTable('rols').references('id_rol');
      //references('rols.id_rol')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = async (knex) => {
    await knex.schema.dropTable('rols')
}
  
