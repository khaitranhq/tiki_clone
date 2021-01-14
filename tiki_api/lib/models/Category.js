'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Category extends Schwifty.Model {
  static get tableName() {
    return 'Categories';
  }

  static get joiSchema() {
    return Joi.object({
      categoryID: Joi.number().integer().greater(0),
      categoryName: Joi.string().required(),
      icon: Joi.string(),
      parentID: Joi.number().integer().greater(0)
    });
  }
};
