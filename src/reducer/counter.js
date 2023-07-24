/* eslint-disable default-case */
const COUNTER_TYPES = {
  'INCREASE': 'INCREASE',
  'DECREASE': 'DECREASE',
  'INCREASE_ASYNC': 'INCREASE_ASYNC',
};

const actionsCreator = (dispatch) => ({
  increase: (count) => {
    dispatch({
      type: 'INCREASE',
      count
    });
  },
  decrease: (count) => {
    dispatch({
      type: 'DECREASE',
      count
    });
  },
  increaseAsync: (payload) => {
    dispatch({
      type: 'INCREASE_ASYNC',
      payload
    });
  }
})

const reducer = (state = {}, action) => {

  switch (action.type) {
    case COUNTER_TYPES.INCREASE:
      return { ...state, count: state.count + (action.count || 1) }
    case COUNTER_TYPES.DECREASE:
      return { ...state, count: state.count - (action.count || 1) }
    case COUNTER_TYPES.INCREASE_ASYNC:
      return { ...state, count: state.count + (action.count || 1) };
    default:
      return state;
  }
};

export {
  reducer,
  actionsCreator
}
