function every(array, test) {
    // Loop Version
    // for (let elemment of array)
    // {
    //     if (!test(elemment)) return false;
    // }
    // return true;

    // Some Version
    return !array.some(element => !test(element));
}
  
 console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true