// Creat a faulty Calculator
/* This faulty calculator does following 
--> It take two number as input from the user
--> It do wrong operations
+ to -
* to +
- to /
/ to **

with operation of 10% of times


*/

console.log("Faulty Calculator")

let a = Number(prompt("Enter First Number"))
let b = Number(prompt("Enter 2nd number"))

let random = Math.random()

let add = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let exp = a**b;

if(randome<0.1) {
    console.log("Addition is: ", a-b)
    console.log("Subtraction is: ", a+b)
    console.log("division is: ", a*b)
    console.log("multiplication is: ", a/b)
}