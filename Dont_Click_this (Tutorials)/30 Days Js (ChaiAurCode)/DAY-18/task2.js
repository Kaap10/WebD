//selection sort

function selectionSort(arr) {
    let n = arr.length;
    for(let i=0; i<n; i++) {
        let minIndex = i;
        for(let j=i+1; j<n; j++) {
            if(arr[j]<arr[minIndex]) {
                minIndex=j;
            }
        }

        let temp = arr[minIndex];
        arr[minIndex]=arr[i];
        arr[i] = temp;
    }

    return arr;
}

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]))