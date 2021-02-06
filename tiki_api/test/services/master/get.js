'use strict';

// Load modules
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Server = require('../../../server');

// Test shortcuts

const { describe, it, before, after } = (exports.lab = Lab.script());
const { expect } = Code;

describe('TestRoutes', () => {
  let server = {};
  before(async (flags) => {
    server = await Server.deployment();
  });

  after(async () => {
    await server.stop();
  });

  describe('Test master get service', () => {
    it('should return root categories', async () => {
      const { categories } = await server.services().masterGetService.getMaster();

      expect(categories).to.be.an.array();
    });
  });
});
