import { SAVE_CATEGORIES } from '../types/home.type';

export const saveCategories = (categories) => {
  return {
    type: SAVE_CATEGORIES,
    payload: categories
  };
};
