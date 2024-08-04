const str = "The numbers are 123, 4567, and 89.";
const regex = /\d+/g;
const matches = str.match(regex);
console.log(matches); // Output: ["123", "4567", "89"]