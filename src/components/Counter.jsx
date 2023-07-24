import { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreator } from '../reducer/counter';

class Counter extends Component {

  render() {
    const { master, count, increase, decrease } = this.props;
    return (
      <div>
        <h1>this is counter component</h1>
        <p>master: {master}, counter： {count}</p>
        <p>
          <button onClick={() => increase()}>increase</button>
          <button onClick={() => decrease()}>decrease</button>

        </p>
      </div>
    )
  }
}

export default connect((state) => {
  console.log('state.counter: ', state);
  return {
    ...state.counter
  }
}, (dispatch) => {
  return actionsCreator(dispatch);
})(Counter);
