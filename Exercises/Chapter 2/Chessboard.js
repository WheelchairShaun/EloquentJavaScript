let chessboard = "";
let size = 8;

for (let row = 1; row <= size; row++)
{
    for (let column = 1; column <= size; column++)
    {
        if (row % 2 == 0)
        {
            chessboard += column % 2 == 0 ? " " : "#";
        }
        else
        {
            chessboard += column % 2 == 0 ? "#" : " ";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);
