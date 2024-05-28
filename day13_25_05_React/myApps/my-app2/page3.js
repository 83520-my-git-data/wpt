function function1()
{

    const numbers = [1,3,5,7,9,11,13,15];

    const squares = [];

    for(const value of numbers)
        {

            squares.push(value ** 2);
        }

    console.log(squares);

}

function1();

console.log("\n");

function function2()
{
    const numbers = [1, 3, 5, 7, 9, 11 , 13];

    const squares = numbers.map((badaAadmi) => {
        return badaAadmi ** 2;
    });

    console.log(`value : ${squares}`);
}

function2();


function function3()
{

    const temp_c = [37, 35];
}