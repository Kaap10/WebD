function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]