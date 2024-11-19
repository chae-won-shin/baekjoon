const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const len = input.length;
const subStrings = new Set();

for (let i = 1; i <= len; i++) {
  for (let j = 0; j <= len - i; j++) {
    const start = j;
    const end = j + i;

    const subStr = input.slice(start, end);
    subStrings.add(subStr);
  }
}

console.log(subStrings.size);
