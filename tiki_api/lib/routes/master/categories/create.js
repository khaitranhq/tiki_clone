'use strict';

module.exports = {
  method: 'POST',
  path: '/master/categories',
  options: {
    handler: async (request, h) => {
      const { masterCreateService } = request.services();
      return masterCreateService.initData();
    }
  }
};
