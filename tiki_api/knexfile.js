/*eslint-disable hapi/hapi-scope-start */
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'Pass@word1',
      database: 'tiki',
      pool: {
        min: 0,
        max: 7
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'Pass@word1',
      database: 'tiki',
      pool: {
        min: 0,
        max: 7
      }
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'Pass@word1',
      database: 'tiki',
      pool: {
        min: 0,
        max: 7
      }
    }
  }
};
