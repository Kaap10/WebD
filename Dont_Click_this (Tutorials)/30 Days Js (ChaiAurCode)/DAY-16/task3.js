function sumArray(arr) {
    if(arr.length===0) {
        return 0;
    }

    let result = arr[0] + sumArray(arr.slice(1));
    return result;
}

console.log(sumArray([1,2,3,4,5])); // 15
console.log(sumArray([])); // 0