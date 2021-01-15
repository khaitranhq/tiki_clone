import { HYDRATE } from 'next-redux-wrapper';

const initialState = {};

const homeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        bac: 'xc'
      };
    default:
      return {
        okk: 'noooo'
      };
  }
};

export default homeReducer;
