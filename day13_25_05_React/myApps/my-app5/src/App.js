import logo from './logo.svg';
import './App.css';
import Car from './components/car';
import Cars from './components/cars' 
import Persons from './components/persons' 
import Person from './components/person';

function App() {

  const person = {
    firstName: 'bada',
    lastName: 'aadmi',
    personEmail: 'badaAadmi@gmail.com',
    personLatestAge: 24,
    personPresentCity: 'Karad'
  }

  const car = {
    carName: 'Gallado',
    carModel: 'Mercedes X2',
    carPrice: 138
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

    <div>

    <Person
    
    age={person.personLatestAge}
    city={person.personPresentCity}
    name={person.firstName + ' '+ person.lastName}
    email={person.personEmail}
    
    />

   <Car carObject = {car}/>
   
      
    </div>
  );
}

export default App;
