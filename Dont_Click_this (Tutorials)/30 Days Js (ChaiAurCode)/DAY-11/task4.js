const asyncResolve = async () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved value from async function");
      }, 2000);
    });
  
    const result = await promise;
    console.log(result); // Resolved value from async function
  };
  
  asyncResolve();