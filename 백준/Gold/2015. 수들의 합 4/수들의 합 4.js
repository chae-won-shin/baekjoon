const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let psum = { 0: 1 };
let sum = 0;
let answer = 0;

for (let i of arr) {
  sum += i; // 누적합

  if (psum[sum - k] !== undefined) {
    answer += psum[sum - k];
  }

  psum[sum] = (psum[sum] || 0) + 1;
}

console.log(answer);
