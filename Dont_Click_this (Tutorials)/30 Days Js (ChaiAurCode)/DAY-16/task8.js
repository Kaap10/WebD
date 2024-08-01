function countOccurrences(arr, target) {
    // Base Case
    if (arr.length === 0) {
      return 0;
    }
  
    // Recursive Relation + Processing
    let recursionAns = countOccurrences(arr.slice(1), target);
    let isTargetFound = arr[0] === target ? 1 : 0;
    let count = isTargetFound + recursionAns;
    return count;
  }
  
  console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1)); // 3
  console.log(countOccurrences([10, 20, 30, 40, 50], 25)); // 0