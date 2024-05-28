import persons from '../dummy/persons.json'

function Persons3()
{
    return(
        <div>
            <h2>Person 3</h2>
            <ul>
                {persons.map((badaAadmi) => {
                    return(
                        
                        <li>
                            <hr/>
                            <div>Name : {badaAadmi.name}</div>
                            <div>Age: {badaAadmi.age}</div>
                            <div>City : {badaAadmi.city}</div>
                            <div>Email : {badaAadmi.email}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Persons3;