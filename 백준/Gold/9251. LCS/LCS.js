const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const s1 = input[0].split("");
const s2 = input[1].split("");

const n = s1.length;
const m = s2.length;

let dp = Array.from({ length: n + 1 }).map(() => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[n][m]);
