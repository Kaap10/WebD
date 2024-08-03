function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  }
  
  console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]