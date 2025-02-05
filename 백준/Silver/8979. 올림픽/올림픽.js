const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const nations = input.slice(1).map((e) => e.split(" ").map(Number));

nations.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

const idx = nations.findIndex((nation) => nation[0] === k);
let rank = idx + 1;

for (let i = 0; i < n; i++) {
  if (nations[idx].slice(1).join("") === nations[i].slice(1).join("")) {
    rank = i;
  }
}

console.log(rank);
