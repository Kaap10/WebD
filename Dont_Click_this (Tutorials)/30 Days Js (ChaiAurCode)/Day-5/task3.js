//write a function expression to calculate then maximum of two numbers and log into the result

const findMaxNum = function(num1, num2) {
    let max = num1 > num2 ? num1 : num2;
    console.log(`The Maximum of ${num1} and ${num2} is ${max}`);
};

findMaxNum(3, 4);