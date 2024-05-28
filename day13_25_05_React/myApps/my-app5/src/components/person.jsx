//function Person( personObject ) //2nd method
function Person({name, email, age, city})
{
    ///2nd method
    //const {name, email, age, city} = personObject

    return (

        //1st method
        // <div>
        //     <div>Name : {personObject.name}</div>
        //     <div>Age : {personObject.age}</div>
        //     <div>City : {personObject.city}</div>
        //     <div>Email : {personObject.email}</div> 
        //     <hr/>
        // </div>


        //2nd method and 3rd method
        <div>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>City : {city}</div>
            <div>Email : {email}</div>
            <hr/>
        </div>
    )
}


export default Person
