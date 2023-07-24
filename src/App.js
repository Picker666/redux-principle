import logo from './logo.svg';

import Counter from './components/Counter';
import Person from './components/Person';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Person city="SH" company="HSBC" />
        <Counter master="Picker" />
      </header>
    </div>
  );
}

export default App;
