const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

const total = [];
const dp = new Array(N + 1).fill(Infinity);

let i = 1;
let item = 0;
while (N > item) {
  item += Math.floor((i * (i + 1)) / 2);
  total.push(item);

  i++;
}

for (let i = 1; i < N + 1; i++) {
  for (let item of total) {
    if (item == i) {
      dp[i] = 1;
      break;
    } else if (item > i) break;
    dp[i] = Math.min(dp[i], 1 + dp[i - item]);
  }
}

console.log(dp[N].toString());
