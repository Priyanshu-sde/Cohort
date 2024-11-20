/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//Done

function findLargestElement(numbers) {
    var a = 0;
    for(let i = 0;i < numbers.length;i++){
        a = Math.max(a,numbers[i]);
    }
    return a;
}
var sr = [1,3,5,2,7,6];
console.log(findLargestElement(sr));
module.exports = findLargestElement;