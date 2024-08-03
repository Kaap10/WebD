function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== Math.floor(arr.length / 2)) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]