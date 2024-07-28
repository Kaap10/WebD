function randomPromise() {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("Promise resolved!");
      } else {
        reject(new Error("Promise rejected."));
      }
    });
  }
  
  randomPromise()
    .then((message) => console.log(message))
    .catch((error) => console.log("Caught an error:", error.message));