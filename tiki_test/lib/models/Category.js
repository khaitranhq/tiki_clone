'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class ModelName extends Schwifty.Model {

    static get tableName() {

        return '';
    }

    static get joiSchema() {

        return Joi.object({});
    }
};
