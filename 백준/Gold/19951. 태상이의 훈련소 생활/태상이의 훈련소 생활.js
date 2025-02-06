const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const h = input[1].split(" ").map(Number);
const commands = input.slice(2).map((e) => e.split(" ").map(Number));

let psum = new Array(n).fill(0);

commands.forEach((command) => {
  const [a, b, k] = command;

  psum[a - 1] += k;
  psum[b] -= k;
});

for (let i = 1; i < n; i++) {
  psum[i] += psum[i - 1];
}

for (let i = 0; i < n; i++) {
  h[i] += psum[i];
}

console.log(h.join(" "));
