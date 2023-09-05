function arrayToList(arrayValue)
{
    let list = null;

    for (let i = arrayValue.length - 1; i > -1; i--)
    {
        list = prepend(arrayValue[i], list);
    }

    return list;
}

function listToArray(listValue)
{
    let array = [];

    for (let node = listValue; node; node = node.rest)
    {
        array.push(node.value);
    }

    return array;
}

function prepend(element, listValue)
{
    return { value: element, rest: listValue };
}

function nth(listValue, n)
{
    if (n == 0)
    {
        return listValue.value;
    }

    return nth(listValue.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20