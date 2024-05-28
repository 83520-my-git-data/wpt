import logo from './logo.svg';
import Cars from './components/cars'
import Person from './components/person'
import Mobile from './components/mobile';
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
      <hr/>
      <h1>App components</h1>
      <Person/>
      <Cars/>
      <Mobile/>
      
    </div>
  );
}

export default App;
