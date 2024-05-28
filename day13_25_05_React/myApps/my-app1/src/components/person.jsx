function Person()
{
    const personName = 'Bada Aadmi';
    const personAge = 24;
    const personCountry = 'India';
    const personCanVote = true;

    return(
        <div>

            <h2>Person</h2>

            <div>Name: {personName}</div>
            <div>Country: {personCountry}</div>
            <div>Age: {personAge}</div>
            <div>Person Can Vote: {personCanVote ? 'Yes' : 'No'}</div>
            
            <hr/>
        </div>
    )
}

export default Person;