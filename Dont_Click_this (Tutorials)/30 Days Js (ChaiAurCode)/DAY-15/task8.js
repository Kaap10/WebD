function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = args.toString();
      if (cache[key]) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  const factorial = memoize(function (n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  });
  
  console.log(factorial(5)); // 120
  console.log(factorial(6)); // 720