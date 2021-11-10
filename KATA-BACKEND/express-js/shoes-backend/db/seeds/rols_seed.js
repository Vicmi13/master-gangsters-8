
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rols').del()
    .then(function () {
      // Inserts seed entries
      return knex('rols').insert([
        {id_rol: 1, description: 'admin'},
        {id_rol: 2, description: 'customer'},
        {id_rol: 3, description: 'super admin'}
      ]);
    });
};
