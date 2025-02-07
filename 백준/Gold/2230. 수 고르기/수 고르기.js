const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

arr.sort((a, b) => a - b);
let [start, end] = [0, 1];
let answer = Infinity;

while (start < n && end < n) {
  let temp = arr[end] - arr[start];
  if (temp === m) {
    answer = temp;
    break;
  }
  if (temp < m) {
    end++;
    continue;
  }
  start++;
  answer = Math.min(answer, temp);
}

console.log(answer);
