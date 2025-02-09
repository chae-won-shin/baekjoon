const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sum = 0;
input.forEach((num) => {
  sum += num ** 2;
});

console.log(sum % 10);
