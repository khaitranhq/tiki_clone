'use strict';

const Schmervice = require('schmervice');
const axios = require('axios');

const rootCategoryIcons = [
  'mobile-phone',
  'monitor',
  'headphones',
  'laptop',
  'photo-camera',
  'washing-machine',
  'pot',
  'spray',
  'feeding-bottle',
  'lipstick',
  'tshirt',
  'basketball-ball',
  'motorbike',
  'internet',
  'book',
  'gift-voucher'
];

module.exports = class MasterCreateService extends Schmervice.Service {
  async insertCategory(categories, parentID) {
    console.log('categories', categories);
    const { Category } = this.server.models();

    for (let i = 0; i < categories.length; ++i) {
      const {
        item: { title },
        sub
      } = categories[i];

      let categoryData = {
        categoryName: title === '' ? undefined : title
      };

      if (parentID) categoryData = { ...categoryData, parentID };
      else categoryData = { ...categoryData, icon: rootCategoryIcons[i] };

      console.log(categories[i].item);
      console.log(categoryData);

      const result = await Category.query().insert(categoryData);

      console.log('sub', sub);
      if (sub) await this.insertCategory(sub, result.categoryID);
    }
  }

  async initData() {
    const res = await axios({
      url: 'https://api.tiki.vn/shopping/v2/mega_menu',
      method: 'GET'
    });
    const categories = res.data.data;

    this.insertCategory(categories, null);
    return {};
  }
};
