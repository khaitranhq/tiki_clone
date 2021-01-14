const bcrypt = require('bcrypt');

const hashPassword = async () => {
  const saltRound = 10;
  const encodedPassword = await bcrypt.hash('123', saltRound);
  return encodedPassword;
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('UserAccounts')
    .del()
    .then(async () => {
      // Inserts seed entries
      return knex('UserAccounts').insert([
        {
          name: 'Admin',
          email: 'admin@tiki.vn',
          password: await hashPassword(),
          roleID: 1
        },
        {
          name: 'Customer01',
          email: 'user1@tiki.vn',
          password: await hashPassword(),
          roleID: 2
        },
        {
          name: 'Customer02',
          email: 'user2@tiki.vn',
          password: await hashPassword(),
          roleID: 2
        },
        {
          name: 'Shop01',
          email: 'user3@tiki.vn',
          password: await hashPassword(),
          roleID: 3
        },
        {
          name: 'Shop02',
          email: 'user4@tiki.vn',
          password: await hashPassword(),
          roleID: 3
        }
      ]);
    });
};
