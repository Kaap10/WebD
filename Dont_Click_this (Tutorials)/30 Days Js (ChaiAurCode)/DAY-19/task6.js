const str = "example@domain.com";
const regex = /(\w+)@([\w.]+)/;
const matches = str.match(regex);
console.log(matches); // Output: ["example@domain.com", "example", "domain.com"]