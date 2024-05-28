function Car({ carObject })
{
    return(
        <div>            
            <div>Car Name : {carObject.carName}</div>
            <div>Car Model : {carObject.carModel}</div>
            <div>Car Price : {carObject.carPrice}</div>
            <hr/>
        </div>
    )
}

export default Car
