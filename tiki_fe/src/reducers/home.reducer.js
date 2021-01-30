import { HYDRATE } from 'next-redux-wrapper';
import { SAVE_CATEGORIES } from '../types/home.type';

const initialState = { categories: [] };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.home };
    case SAVE_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return { ...state };
  }
};

export default homeReducer;
