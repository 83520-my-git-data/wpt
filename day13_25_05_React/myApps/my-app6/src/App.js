import logo from './logo.svg';
import './App.css';

function App() {

  const onButtonClick = () => {
    alert ('button clicked')
  }




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

    <div className='container'>

      <button onClick={onButtonClick} className='btn btn-success'>
        Test Button
      </button>

      <button onClick= {(e) => {console.log(e)}} className='btn btn-danger'>Test Button 2</button>

    </div>
  );
}

export default App;
