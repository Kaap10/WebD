const rejectPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  });
  
  rejectPromise.catch((error) => {
    console.error(error); // Promise rejected after 2 seconds
  });