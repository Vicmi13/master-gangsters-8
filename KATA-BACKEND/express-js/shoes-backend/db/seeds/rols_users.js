
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'jose', app: 'mon', apm: 'guz', email: 'montoya@mail.com', password: '1234', id_rol: 1 },
        { name: 'juanito', app: '', apm: '', email: 'juanito@mail.com', password: '1234', id_rol: 2 },
        { name: 'potito', app: '', apm: '', email: 'potito@mail.com', password: '1234', id_rol: 2 },
      ]);
    });
};
