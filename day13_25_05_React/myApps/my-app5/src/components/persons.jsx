import personsList from '../dummy/personsList.json'
import Person from './person'


function Persons()
{
    return(

        //1st method
        // <div className='App'>
        //     <h3>Persons</h3>
        //     {persons.map((personToBePassed) => {
        //         return <Person personObject = {personToBePassed}/>
        //     })}
        // </div>

        //2nd method
        <div className='App'>
            <h3>Persons</h3>

            {personsList.map((personToBePassed) => {
                return (<Person 

                name={personToBePassed.name}
                age={personToBePassed.age}
                city={personToBePassed.city}
                email={personToBePassed.email}
                       
                />)
            })}
        </div>
    )
}

export default Persons
