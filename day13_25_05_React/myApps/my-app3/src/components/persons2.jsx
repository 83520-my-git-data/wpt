import persons from '../dummy/persons.json'

function Persons2()
{
    return(
        <div>
            <h2>Persons 2</h2>
            {persons.map((badaAadmi) => {
                return(
                    <div>
                        <hr/>
                        <div>Name : {badaAadmi.name}</div>
                        <div>Age : {badaAadmi.age}</div>
                        <div>City : {badaAadmi.city}</div>
                        <div>Email : {badaAadmi.email}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Persons2