const str = "hey i am Kaptn, the Og";
const regex = /\b[A-Z][a-z]*\b/g;
const matches = str.match(regex);
console.log(matches);