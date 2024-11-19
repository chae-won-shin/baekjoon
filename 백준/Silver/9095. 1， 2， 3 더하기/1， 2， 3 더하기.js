const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const cases = input.slice(1);
let dp = new Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

cases.forEach((c) => {
  console.log(dp[c]);
});
