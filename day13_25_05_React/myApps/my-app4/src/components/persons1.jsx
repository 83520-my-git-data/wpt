import persons from '../dummy/persons.json'


function Persons1()
{

    return(
        <div>
            <h2>Persons 1</h2>
            {persons.map((pi) => {
                return(
                    <div className='App'>
                        <hr/>
                        <div>Name : {pi.name}</div>
                        <div>Age : {pi.age}</div>
                        <div>City : {pi.city}</div>
                        <div>Email : {pi.email}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Persons1

