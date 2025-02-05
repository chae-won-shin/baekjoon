const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let answer = Array.from({ length: n }).map(() => -1);
let temp = [];

for (let i = 0; i < n; i++) {
  while (temp && arr[temp[temp.length - 1]] < arr[i]) {
    answer[temp.pop()] = arr[i];
  }
  temp.push(i);
}

console.log(answer.join(" "));
