// Strings:

let day = "tuesday ";

// 1. Find the length of the String
console.log(day.length);

// 2. Get the sub-string from whole string
subday = day.slice(0, 4);
console.log(subday);

// 3. Find the specific character in a String
console.log(day[3]);

// 4. Split the string and store into array
let splitDay = day.split('s');
console.log(splitDay[1]);

// 5. Find the length before trimming
console.log(splitDay[1].length);

// 6. Find the length after trimming
console.log(splitDay[1].trim().length);

// 7. Declare two numeric string and subtract
let today = '23';
let nextDay = '28';
let diff = parseInt(nextDay) - parseInt(today);
console.log(diff+" -- "+typeof(diff));

// 8. Concatenation
let newQuote = day.concat("is a funday");
console.log(newQuote);

// 9. Find the index of day
let daystarts = newQuote.indexOf('day');
console.log(daystarts);

// 9. Find the index of day in other position
let daystarts2 = newQuote.indexOf('day', 5);
console.log(daystarts2);

let val = newQuote.indexOf('day');
let count = 0;

while(val != -1) {
    count++;
    val = newQuote.indexOf('day', val+1);
}
console.log(count);