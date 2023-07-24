/* eslint-disable default-case */
const PERSON_TYPES = {
  'CHANGE_NAME': 'CHANGE_NAME',
  'CHANGE_AGE': 'CHANGE_AGE',
  'CHANGE_HAPPY': 'CHANGE_HAPPY',
}

const actionsCreator = (dispatch) => ({
  changeName: (name) => {
    dispatch({
      type: 'CHANGE_NAME',
      name
    });
  },
  changeAge: (age) => {
    dispatch({
      type: 'CHANGE_AGE',
      age
    });
  },
  changeHappy: (happy) => {
    dispatch({
      type: 'CHANGE_HAPPY',
      happy
    });
  }
})


const reducer = (state = {}, action) => {

  switch (action.type) {
    case PERSON_TYPES.CHANGE_NAME:
      return { ...state, name: action.name }
    case PERSON_TYPES.CHANGE_AGE:
      return { ...state, age: action.age }
    case PERSON_TYPES.CHANGE_HAPPY:
      return { ...state, happy: action.happy };
    default:
      return state;
  }
};

export {
  reducer,
  actionsCreator
}
