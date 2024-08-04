const url = "http://w.example.com";
const regex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/;
const isValid = regex.test(url);
console.log(isValid); // Output: true