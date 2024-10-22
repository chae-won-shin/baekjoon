const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const N = parseInt(input[0]);
const land = input.slice(1);
let res = -1001;

// 누적 합 배열 생성
const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 누적 합 계산
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      land[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

// 서브배열 최대 합 계산
for (let sy = 1; sy <= N; sy++) {
  for (let sx = 1; sx <= N; sx++) {
    for (let fy = sy; fy <= N; fy++) {
      for (let fx = sx; fx <= N; fx++) {
        if (fy - sy === fx - sx) {
          const sum =
            dp[fy][fx] - dp[sy - 1][fx] - dp[fy][sx - 1] + dp[sy - 1][sx - 1];
          if (sum > res) res = sum;
        }
      }
    }
  }
}

console.log(res);
