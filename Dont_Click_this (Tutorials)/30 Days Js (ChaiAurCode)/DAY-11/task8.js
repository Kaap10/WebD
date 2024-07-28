// Task 8
const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 1000, "First promise")
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, "Second promise")
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 3000, "Third promise")
  );
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("All promises resolved:", values);
  });
  
  // Task 9
  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log("First promise resolved:", value);
  });