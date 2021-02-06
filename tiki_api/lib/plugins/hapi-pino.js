'use strict';
const HapiPino = require('hapi-pino');

module.exports =
  process.env.NODE_ENV === 'test'
    ? undefined
    : {
      plugins: {
        options: {
          prettyPrint: process.env.NODE_ENV === 'development'
        }
      } // May be an array or a single plugin
    };
