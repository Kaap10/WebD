//function to find the largest of three numbers using nested if else

let a = 2;
let b = 4;
let c = 9;

if(a>b) {
    if(a>c) {
        console.log("a is greater");
    }
}

else if(b>a) {
    if(b>c) {
        console.log("b is greater");
    }
}

else if(c>a && c>b) {
    console.log("c is greater");
}

else {
    console.log("Error!");
}
