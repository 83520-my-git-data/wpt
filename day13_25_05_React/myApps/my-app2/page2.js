function function1()
{
    const numbers = [1,3,5,7,9,11,13,15];

    for(let index = 0 ; index < numbers.length ; index++)
        {
            console.log(`value = ${numbers[index]}`);
        }
}



function function2()
{
    const numbers = [1,3,5,7,9,11,13,15];

    for(const index in numbers)
        {
            console.log(`value = ${numbers[index]}`);
        }

}


function function3()
{
    const numbers = [1,3,5,7,9,11,13,15];

    for(const number of numbers)
        {console.log(`value = ${number}`)};
}

function1();
function2();
function3();
