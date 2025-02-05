const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((e) => e.split(" ").map(Number));
let dp = Array.from({ length: n + 1 }).map(() => new Array(m + 1).fill(0));
let answer = -Infinity;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] =
      graph[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

for (let sx = 1; sx <= n; sx++) {
  for (let sy = 1; sy <= m; sy++) {
    for (let cx = sx; cx <= n; cx++) {
      for (let cy = sy; cy <= m; cy++) {
        let temp =
          dp[cx][cy] - dp[sx - 1][cy] - dp[cx][sy - 1] + dp[sx - 1][sy - 1];
        answer = answer < temp ? temp : answer;
      }
    }
  }
}

console.log(answer);
