// Declare the arrays in different ways
var marks = Array(6);
var marks = new Array(20, 40, 35, 12, 37, 100);
var marks = [20, 40, 35, 12, 37, 100];

// Find the second index value
console.log("Second index value is: "+marks[2]);

// Update the third index value
marks[3] = 42;
console.log(marks);

// To know the length of the array
console.log("Length of an array is: "+marks.length);

// Add element at the end
marks.push(95);
console.log(marks);

// Remove the last element
marks.pop();
console.log(marks);

// Add element at begining
marks.unshift(45);
console.log(marks);

// Idnetify the index based on value
console.log(marks.indexOf(37));

// Identify whether the paricular value present or not
console.log(marks.includes(99));

// Create a sub array with the range 2 to 4
subArray = marks.slice(2, 5);
console.log(subArray);

// Identify the sum of the elements in an array
let sum = 0;

for(let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log(sum);