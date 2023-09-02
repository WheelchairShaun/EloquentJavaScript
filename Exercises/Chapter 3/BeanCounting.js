function countBs(input)
{
    return countChar(input, "B");
}

function countChar(input, c)
{
    let count = 0;

    for (let i = 0; i < input.length; i++)
    {
        if (input[i] === c) count++;
    }

    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4