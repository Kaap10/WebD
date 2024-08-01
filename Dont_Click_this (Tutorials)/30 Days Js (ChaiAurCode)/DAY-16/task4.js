function maxArray(arr) {
    // Base Case
    if (arr.length === 1) {
      return arr[0];
    }
  
    // Recursive Relation
    let recursionAns = Math.max(arr[0], maxArray(arr.slice(1)));
    return recursionAns;
  }
  
  console.log(maxArray([1, 5, 3, 9, 2])); // 9
  console.log(maxArray([10, 20, 30, 15])); // 30