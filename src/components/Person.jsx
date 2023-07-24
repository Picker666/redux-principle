import { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreator } from '../reducer/person';

class Person extends Component {

  render() {
    const { name, age, happy, city, company, changeName, changeAge, count } = this.props;

    return <div>
      <h1>this is person component</h1>
      <p>名字：{name}， 年龄： {age + count}岁，{happy ? '嗨得很' : 'sad。。。'}</p>
      <p>城市：{city}，公司：{company}</p>
      <p>
        <button onClick={() => changeName("Christine")}>change Name</button>
        <button onClick={() => changeAge(3)}>Change age</button>
      </p>
    </div>
  }
}

export default connect((state) => {
  console.log('state: ', state);
  return {
    ...state.person,
    ...state.counter
  }
}, (dispatch) => {
  return actionsCreator(dispatch);
})(Person);
