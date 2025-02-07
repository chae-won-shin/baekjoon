const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
let flag = true;

for (let i = n - 1; i > 0; i--) {
  sum += arr[i];
  avg = sum / (n - i);

  if (avg <= arr[i - 1] - l || avg >= arr[i - 1] + l) {
    flag = false;
    break;
  }
}

if (flag) console.log("stable");
if (!flag) console.log("unstable");
