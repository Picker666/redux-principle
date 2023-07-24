import reducers, { createStore } from './reducer';

const initialState = {
  person: {
    name: 'Picker',
    age: 12,
    happy: true
  },
  counter: {
    count: 0
  }
};

const store = createStore(reducers, initialState);

export default store;
