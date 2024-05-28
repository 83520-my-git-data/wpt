import carsList from '../dummy/carsList.json'
import Car from './car'

function Cars()
{
    return(
        <div className='App'>
            <h3>Cars</h3>
            {carsList.map((carToBePassed) => {
                return <Car carObject = {carToBePassed}/>
            })}
        </div>
    )
}

export default Cars
