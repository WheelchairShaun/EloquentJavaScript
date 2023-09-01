for (let row = 0; row < 7; row++)
{
    let count = 0, output = "";
    while (count <= row)
    {
        output += "#";
        count++;
    }
    
    console.log(output);
}
