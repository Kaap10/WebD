function testFinallyBlock() {
    try {
      console.log("In try block");
      throw new Error("Error in try block");
    } catch (error) {
      console.log("In catch block:", error.message);
    } finally {
      console.log("In finally block");
    }
  }
  
  testFinallyBlock();