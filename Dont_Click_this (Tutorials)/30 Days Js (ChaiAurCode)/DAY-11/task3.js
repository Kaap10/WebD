const fetchData = (data, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  fetchData("Fetching data from server 1", 1000)
    .then((message) => {
      console.log(message); // Fetching data from server 1
      return fetchData("Fetching data from server 2", 1000);
    })
    .then((message) => {
      console.log(message); // Fetching data from server 2
      return fetchData("Fetching data from server 3", 1000);
    })
    .then((message) => {
      console.log(message); // Fetching data from server 3
    });