function reverseArray(arrayValue)
{
    let result = [];

    for (let i = 0; i < arrayValue.length; i++)
        result.unshift(arrayValue[i]);

    return result;    
}

function reverseArrayInPlace(arrayValue)
{
    let middle = Math.floor(arrayValue.length / 2);

    for (let i = 0; i < middle; i++)
    {
        let temp = arrayValue[i];
        let swapOffset = middle - i;

        arrayValue[i] = arrayValue[middle + swapOffset];
        arrayValue[middle + swapOffset] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]