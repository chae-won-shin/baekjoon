const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const stairs = input.slice(1).map(Number);
stairs.unshift(0);
let dp = new Array(N + 1).fill(0);

dp[0] = 0;
dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];

for (let i = 3; i < N + 1; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i]
  );
}

console.log(dp[N]);
