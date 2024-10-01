/*
For loop - If you know the number of iterations prior to the execution then we should go for for loop
While loop - If you don't know the number of iterations prior to the execution then we should go for while loop
Do While - Irrespective of condition if we want to execute iteration at least once then we should go for do while loop
*/

let req = true;

if(!req) {
    console.log("Conditioin Satisfied");
} else {
    console.log("Condition Not Satisfied");
    console.log(req);
}

console.log("****** while loop started ********");
let i = 0;

while(i < 10) {
    i++;
    console.log("i value is: "+i);
}


console.log("****** do while loop started ********");
let j = 0;

do {
    j++;
    console.log("j value is: "+j);
} while(j>10);

console.log("****** for loop started ********");
let count = 0;
for(let k = 1; k <= 100; k++) {
    if(k % 2 ==0 && k % 5 ==0) {
        count++;
        console.log("k value is: "+k);

        if(count == 3)
            break;
    }
}

console.log("****** while loop based on condition ********");
let required = true;
while(required) {
    console.log("Condition Satisfied");
    required = false;
}
 
