import persons from '../dummy/persons.json'

function Persons1()
{
    return(
        <div>
            <h2>
                Persons 1
            </h2>
            {persons.map((person) => {

            return(
                <div>
                    <hr/>
                    <div>Name : {person.name}</div>
                    <div>Age : {person.age}</div>
                    <div>City : {person.city}</div>
                    <div>Email: {person.email}</div>
                </div>
            )
            
            })}

        </div>
        
    )

}

export default Persons1;