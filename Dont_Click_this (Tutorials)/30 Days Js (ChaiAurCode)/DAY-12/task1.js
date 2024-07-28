function throwError() {
    throw new Error("This is intentional error");
}

try{
    throwError();
} catch(error){
    console.log("Caught an error: ", error.message);
}