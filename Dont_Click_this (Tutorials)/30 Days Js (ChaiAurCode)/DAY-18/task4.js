//linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(linearSearch([64, 34, 25, 12, 22, 11, 90], 22)); // Output: 4