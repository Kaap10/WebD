// Function to calculate factorial using do-while loop
function calculateFactorial(number) {
    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= number);

    return factorial;
}

// Test the function
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${result}`);