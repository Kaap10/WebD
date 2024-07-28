class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if(!input) {
        throw new ValidationError("Input cant be empty");
    }
    return true;
}

try {
    validateInput("");
} catch(error) {
    console.log(`${error.name}: ${error.message}`);
}