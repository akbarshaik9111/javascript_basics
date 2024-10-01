// Write a function to add two numbers
function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log(sum);

// Write an anonymous function to add two numbers
let sumOfTwoNumbers = function(c, d) {
    return c + d;
}
// Optimize the code
let sumOfTwo = (c, d) => c + d;
console.log(sumOfTwoNumbers(15, 30));
console.log(sumOfTwo(15, 15));