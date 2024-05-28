import persons from '../dummy/persons.json'

function Persons3()
{
    return(
        <ul className='list-group'>
            {persons.map((slay) => {
                return(
                    <li className='list-group-item'>
                        <div>Name : {slay.name}</div>
                        <div>Age : {slay.age}</div>
                        <div>City : {slay.city}</div>
                        <div>Email : {slay.email}</div>
                    </li>
                )
            })}

        </ul>
    )
}


export default Persons3

