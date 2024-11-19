const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

let dp = new Array(1001).fill(0);

dp[1] = 1;
dp[2] = 2;

if (N <= 2) console.log(dp[N]);
else {
  for (let i = 3; i <= N + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  console.log(dp[N]);
}
