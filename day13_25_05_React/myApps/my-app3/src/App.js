import logo from './logo.svg';
import Persons1 from './components/persons1';
import Persons2 from './components/persons2';
import Persons3 from './components/persons3';
import Persons4 from './components/persons4';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <Persons1/>
      <Persons2/>
      <Persons3/>
      <Persons4/>
    </div>
  );
}

export default App;
