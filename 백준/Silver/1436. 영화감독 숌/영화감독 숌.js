const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

const finished = new Array(N + 1);
let num = 666;
let count = 1;

while (count <= N) {
  if (num.toString().includes("666")) {
    finished[count++] = num;
  }
  num++;
}

console.log(finished[N]);
