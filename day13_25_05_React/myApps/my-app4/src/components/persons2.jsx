import persons from '../dummy/persons.json'
import './Persons2.css'

function Persons2()
{
    return(
        <div>
            {persons.map((bi) => {
                return(
                    <div className='persons'>
                        <div>Name : {bi.name}</div>
                        <div>Age : {bi.age}</div>
                        <div>City : {bi.city}</div>
                        <div>Email : {bi.email}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Persons2;