//java scipt arrays
// let nums = [1,2,3,4,5]
// console.log(nums)
// console.log(nums.length)

// nums.pop()
// console.log(nums)
// console.log(nums.length)

let arr = [1,4,9,11]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element**2)
}

console.log(newArr)