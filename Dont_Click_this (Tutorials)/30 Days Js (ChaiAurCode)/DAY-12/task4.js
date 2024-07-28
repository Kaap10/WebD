class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwError() {
    throw new CustomError("This is a custom error.");
  }
  
  try {
    throwError();
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
  