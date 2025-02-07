const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1).map((e) => e.split(" ").map(Number));
const tCases = input.slice(-m).map((e) => e.split(" ").map(Number));

let psum = Array.from({ length: n + 1 }).map(() => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    psum[i][j] =
      psum[i - 1][j] + psum[i][j - 1] + arr[i - 1][j - 1] - psum[i - 1][j - 1];
  }
}

tCases.forEach((tc) => {
  const [x1, y1, x2, y2] = tc;
  console.log(
    psum[x2][y2] - psum[x1 - 1][y2] - psum[x2][y1 - 1] + psum[x1 - 1][y1 - 1]
  );
});
