function createUniqueIdGenerator() {
    let lastId = 0;
  
    return function () {
      lastId++;
      return lastId;
    };
  }
  
  const generateId = createUniqueIdGenerator();
  console.log(generateId); // generateId: [Function (anonymous)]
  console.log(generateId()); // 1
  console.log(generateId()); // 2