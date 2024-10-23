const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

const dp = new Array(k + 1).fill(100001);
dp[0] = 0;

for (const coin of coins) {
  for (let i = coin; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[k] === 100001 ? -1 : dp[k]);
