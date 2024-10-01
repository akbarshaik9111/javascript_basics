let a = 20;
let b = 240.6
let c = "Akbar Shaik";
let d = true;6

//let c = a+b; (it did not work We cannot redeclare variable with let keyword but possible with var)
c = a + b; // reassigning is allowed with let
// var c = a+b (this will work if above variable also declared with var)
console.log(c);
console.log(!d+" : "+typeof(d));