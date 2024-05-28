function Cars()
{
    const cars = ['GLS', 'GLB', 'M2', 'X5'];

    return(

        <div>

            <h3>Cars</h3>

            <div>{cars[0]}</div>
            <div>{cars[1]}</div>
            <div>{cars[2]}</div>
            <div>{cars[3]}</div>

            

            <ul>
                {cars.map ((model) => {
                    return <li>{model}</li>
                })}
            </ul>

            <hr/>

        </div>
    );

}

export default Cars;