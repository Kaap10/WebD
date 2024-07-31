function greetUser(name) {
    return function () {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetSANOJ = greetUser("SANOJ");
  greetSANOJ(); // Hello, SANOJ!