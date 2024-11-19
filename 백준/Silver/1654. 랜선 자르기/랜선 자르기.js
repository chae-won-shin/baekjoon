const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [_, N] = input.shift().split(" ").map(Number);
const lines = input.map(Number);

let min = 1;
let max = Math.max(...lines);
let answer = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let temp = 0;

  lines.forEach((line) => {
    temp += Math.floor(line / mid);
  });

  if (temp >= N) {
    answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
