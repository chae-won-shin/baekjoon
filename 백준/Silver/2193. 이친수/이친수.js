const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const number = parseInt(input);

const array = new Array(90).fill(0);
array[0] = 1;
array[1] = 1;
array[2] = 1;

for (let i = 3; i <= number; i++) {
  array[i] = BigInt(array[i - 2]) + BigInt(array[i - 1]);
}

console.log(String(array[number]));
