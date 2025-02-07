const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K, Q, M] = input[0].split(" ").map(Number);
const sleep = new Set(input[1].split(" ").map(Number));
const codes = input[2].split(" ").map(Number);
const checks = input.slice(3).map((e) => e.split(" ").map(Number));

const dp = Array(N + 3).fill(1);

for (const code of codes) {
  if (!sleep.has(code)) {
    for (let i = code; i <= N + 2; i += code) {
      if (!sleep.has(i)) dp[i] = 0;
    }
  }
}

const sum = Array.from({ length: N + 3 }).fill(0);
sum[3] = dp[3];
for (let i = 4; i <= N + 2; i++) {
  sum[i] = dp[i] + sum[i - 1];
}

checks.forEach((check) => {
  const [start, end] = check;
  console.log(sum[end] - sum[start - 1]);
});
