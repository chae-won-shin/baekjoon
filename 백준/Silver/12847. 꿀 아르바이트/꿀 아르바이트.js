const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < m; i++) {
  sum += arr[i];
}

let ans = sum;

for (let i = m; i < n; i++) {
  sum -= arr[i - m];
  sum += arr[i];
  ans = Math.max(ans, sum);
}

console.log(ans);
