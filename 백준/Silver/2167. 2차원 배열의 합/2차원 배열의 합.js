const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1).map((e) => e.split(" ").map(Number));

const cases = input.slice(n + 2).map((e) => e.split(" ").map(Number));
const sum = Array.from({ length: n + 1 }).map(() => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] =
      sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + arr[i - 1][j - 1];
  }
}

cases.forEach((testCase) => {
  const [i, j, x, y] = testCase;
  console.log(sum[x][y] - sum[x][j - 1] - sum[i - 1][y] + sum[i - 1][j - 1]);
});
