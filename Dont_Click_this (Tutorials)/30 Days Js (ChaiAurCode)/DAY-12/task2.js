function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    console.log(divide(4, 2)); // Expected output: 2
    console.log(divide(4, 0)); // This will throw an error
  } catch (error) {
    console.log("Caught an error:", error.message);
  }