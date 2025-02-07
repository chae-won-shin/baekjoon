const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let min = Math.abs(arr[start] + arr[end]);
let answer = [arr[start], arr[end]];

while (start < end) {
  const left = arr[start];
  const right = arr[end];

  const sum = left + right;

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    answer = [left, right];

    if (min === 0) break;
  }

  if (sum < 0) start++;
  else end--;
}

console.log(answer.join(" "));
