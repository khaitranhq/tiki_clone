'use strict';

const Schmervice = require('schmervice');

module.exports = class MasterGetService extends Schmervice.Service {
  async getMaster() {
    const { Category } = this.server.models();

    const categories = await Category.query().where('parentID', null);
    return { categories };
  }
};
