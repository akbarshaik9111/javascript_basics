let scores = [45, 20,  40, 35, 42, 37, 100];

// Print the sum of the values in an array using reduce function
let sum = scores.reduce((sum, total) => sum+total, 0);
console.log(sum);

//print only even numbers using for loop and push into new array -1
let even_array=[];
for(let i = 0; i < scores.length; i++) {
    if(scores[i] %2 == 0) {
        even_array.push(scores[i]);
    }
}
console.log(even_array);

//print only even numbers using function and push into new array -2
let evenarray = scores.filter(score => score %2 ==0);
console.log(evenarray);

// Mulitply even numbers with 3
let multiplyWithThree = evenarray.map(val => val*3);
console.log(multiplyWithThree);

// Now sum the array
let addition = multiplyWithThree.reduce((sum, total) => sum+total,0);
console.log(addition);

// Combined all the above statements in one function
let marks = [45, 20,  40, 35, 42, 37, 100];
let add = marks.filter(mark => mark %2 == 0).map(mark => mark * 3).reduce((sum, total) => sum+total, 0);
console.log(add);

// Sorting Strings

//1. Sort the strings in ascending order
let fruits = ["banana", "mango", "pomegranate", "apple"];
fruits.sort();
console.log(fruits);

//2. Sort the strings in descending order
console.log(fruits.reverse());

// Sorting Numbers
// Approach -1: Sort the numbers in ascending order
let num = [12, 3, 19, 16, 14];
console.log(num.sort((a, b) => a - b));
// Approach -1: Sort the numbers in ascending order
let num1 = num.sort(function(a,b) {
    return a-b;
});
console.log(num1);

// Approach -2: Sort the numbers in descending order
console.log(num.sort((a, b) => b - a));