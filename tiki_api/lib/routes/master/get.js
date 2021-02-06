'use strict';

module.exports = {
  method: 'GET',
  path: '/master',
  options: {
    handler: async (request, h) => {
      const { masterGetService } = request.services();

      const masterData = await masterGetService.getMaster();
      return masterData;
    }
  }
};
