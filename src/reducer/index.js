// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, applyMiddleware, combineReducers } from './redux';

import { reducer as personReducer } from './person';

import { reducer as counterReducer } from './counter';

export default combineReducers({
  person: personReducer,
  counter: counterReducer
});

export {
  createStore,
  applyMiddleware
}