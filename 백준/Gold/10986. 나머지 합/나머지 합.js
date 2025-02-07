const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let countArr = new Array(m).fill(0);
let psum = new Array(n + 1).fill(0);

psum[1] = arr[0];
for (let i = 1; i <= n; i++) {
  psum[i] = psum[i - 1] + arr[i - 1];

  const mod = psum[i] % m;
  countArr[mod]++;
}

let sum = 0;
for (let i = 0; i < m; i++) {
  sum += comb(countArr[i]);
}

console.log(sum + countArr[0]);

function comb(n) {
  if (n < 2) return 0;
  else return (n * (n - 1)) / 2;
}
