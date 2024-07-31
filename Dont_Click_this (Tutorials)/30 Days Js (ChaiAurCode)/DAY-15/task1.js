function outerFunction() {
    let outerVariable = "I am outside!";

    return function innerfuction() {
        console.log(outerVariable);
    };
}

const inner = outerFunction();
console.log(inner);
inner(); // I am outside!