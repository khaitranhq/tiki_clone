exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Roles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Roles').insert([
        { roleName: 'Admin' },
        { roleName: 'Customer' },
        { roleName: 'Shop manager' }
      ]);
    });
};
