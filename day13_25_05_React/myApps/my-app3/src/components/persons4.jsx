import persons from '../dummy/persons.json'

function Persons4()
{

    return(
        
        <div>
            <h2>Persons 4</h2>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                
                    
                        {persons.map((badaAadmi) => {
                            return(
                                <tr>
                                    <td>{badaAadmi['name']}</td>
                                    <td>{badaAadmi['age']}</td>
                                    <td>{badaAadmi.city}</td>
                                    <td>{badaAadmi.email}</td>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        </div>
    )

}

export default Persons4;