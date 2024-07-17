function applyfunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

const addFive = (x) => x+5;
const square = (x) => x*x;

console.log(applyfunctions(addFive, square, 3));