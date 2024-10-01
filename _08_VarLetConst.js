// Var: Scope is Either Global Level/Function Level
//i. If we declared Global level then it is considered global level only
//ii.  If we declared Functiona level then the scope is Function level only
//iii.  If we declared both places then based on scope it will be applicable
//iv. We can re-initialize the var varible
console.log("***** VAR *****");
var greet = "Morning";
console.log(greet);

function add(a, b) {
    var greet = "Afternoon";
}
console.log(greet);

//let:Scope is Either Global Level/Block level
//i. If we declared Global level then it is considered global level only
//ii.  If we declared Block level then the scope is Block level only
//iii.  If we declared both places then based on scope it will be applicable
//iv. We can re-initialize the let varible
console.log("***** LET *****");
let greet2= "Morning";
console.log(greet2);

if(1 == 1) {
    let greet2 = "Afternoon";
}
console.log(greet2);

// The features of const and let are same except re-initialization
console.log("***** CONST *****");
const greet3 = "Morning";
//const greet3 = "Afternoon"; // We can't re-initialize this one.