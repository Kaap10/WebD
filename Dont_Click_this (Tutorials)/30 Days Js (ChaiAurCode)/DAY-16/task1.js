function factorial(n) {
    if(n<1) return "Invalid Input";
    if(n===0) return 1;

    let result = n * factorial(n-1);
    return result;
}

console.log(factorial(5));
console.log(factorial(-1));
