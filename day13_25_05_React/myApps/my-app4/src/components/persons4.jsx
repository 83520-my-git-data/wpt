import persons from '../dummy/persons.json'

function Persons4()
{
    return(
        <div>
            <h3>Persons4</h3>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {persons.map((shy) => {
                        return(
                            <tr>
                                <td>{shy.name}</td>
                                <td>{shy.age}</td>
                                <td>{shy.city}</td>
                                <td>{shy.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Persons4

