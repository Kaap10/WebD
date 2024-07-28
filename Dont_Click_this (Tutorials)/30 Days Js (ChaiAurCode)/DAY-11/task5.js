const asyncReject = async () => {
    const promise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Rejected value from async function");
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error); // Rejected value from async function
    }
  };
  
  asyncReject();