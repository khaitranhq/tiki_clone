import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import homeReducer from '../reducers/home.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  home: homeReducer
});

export const makeStore = (initialState = {}) => {
  if (process.env.NODE_ENV !== 'production')
    return createStore(
      rootReducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
  return createStore(rootReducers, initialState, applyMiddleware(thunk));
};

export const wrapper = createWrapper(makeStore);
