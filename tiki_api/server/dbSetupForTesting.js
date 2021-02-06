'use strict';

const Dotenv = require('dotenv');
const Path = require('path');

Dotenv.config({ path: Path.join(`${__dirname}../../server/.env`) });
(async () => {
  const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE_TEST
    }
  });

  await knex.migrate.rollback(
    {
      directory: './migrations'
    },
    true
  );

  await knex.migrate.latest({
    directory: './migrations'
  });

  await knex.seed.run();
  process.exit(0);
})();
