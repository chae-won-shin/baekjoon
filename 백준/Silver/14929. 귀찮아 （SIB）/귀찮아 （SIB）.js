const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
let psum = new Array(n).fill(0);

psum[0] = arr[0];
for (let i = 1; i < n; i++) {
  psum[i] = psum[i - 1] + arr[i];
}

let sum = 0;
for (let i = 0; i < n - 1; i++) {
  sum += arr[i] * (psum[n - 1] - psum[i]);
}

console.log(sum);
