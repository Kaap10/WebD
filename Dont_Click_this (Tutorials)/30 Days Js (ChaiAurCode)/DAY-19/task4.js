const str = "(123) 456-7890";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = str.match(regex);
console.log(matches); // Output: ["(123) 456-7890", "123", "456", "7890"]