const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const tCases = input.slice(3).map((e) => e.split(" ").map(Number));

let psum = new Array(n + 1).fill(0);
psum[1] = arr[0];
for (let i = 1; i <= n; i++) {
  psum[i] = psum[i - 1] + arr[i - 1];
}

tCases.forEach((tc) => {
  const [x, y] = tc;
  console.log(psum[y] - psum[x - 1]);
});
