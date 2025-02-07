const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];
let psum = new Array(n + 1).fill(0);

psum[1] = arr[1];
for (let i = 2; i <= n; i++) {
  psum[i] = psum[i - 1] + arr[i];
}

let maximum = -Infinity;
for (let i = k; i <= n; i++) {
  const temp = psum[i] - psum[i - k];
  maximum = Math.max(maximum, temp);
}

console.log(maximum);
