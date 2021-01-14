'use strict';

module.exports = {
  method: 'GET',
  path: '/master',
  options: {
    handler: async (request, h) => {
      const { masterGetService } = request.services();
      return masterGetService.getMaster();
    }
  }
};
