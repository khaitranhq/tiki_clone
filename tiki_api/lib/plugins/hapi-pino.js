'use strict';
const HapiPino = require('hapi-pino');

module.exports = {
  plugins: {
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production'
    }
  }, // May be an array or a single plugin
};
