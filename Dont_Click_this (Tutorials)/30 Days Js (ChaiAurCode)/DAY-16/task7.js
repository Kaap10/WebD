function binarySearch(arr, target, start=0, end=arr.length-1) {
    if(start > end) return -1;

    let result;
    let mid = Math.floor(start + (end-start)/2);

    if(arr[mid]==target) return mid;

    if(arr[mid] > target) {
        result = binarySearch(arr, target, start, mid-1);
    }

    if(arr[mid]<target) {
        result = binarySearch(arr, target, mid+1, end);
    }

    return result;
}

console.log(binarySearch[1,2,3,4,5,6,7,8,9,10], 5); // 4