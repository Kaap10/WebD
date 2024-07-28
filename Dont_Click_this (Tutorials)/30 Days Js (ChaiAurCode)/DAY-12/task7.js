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
  
  async function handlePromise() {
    try {
      const message = await randomPromise();
      console.log(message);
    } catch (error) {
      console.log("Caught an error:", error.message);
    }
  }
  
  handlePromise();