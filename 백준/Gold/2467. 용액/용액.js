const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const liquids = input[1].split(" ").map((v) => +v);

let left_idx = 0;
let right_idx = N - 1;

let answer = Math.abs(liquids[left_idx] + liquids[right_idx]);
let ans_left = left_idx;
let ans_right = right_idx;

while (left_idx < right_idx) {
  let temp = liquids[left_idx] + liquids[right_idx];

  if (Math.abs(temp) <= answer) {
    answer = Math.abs(temp);
    ans_left = left_idx;
    ans_right = right_idx;

    if (answer === 0) break;
  }

  if (temp < 0) left_idx += 1;
  else right_idx -= 1;
}

console.log([liquids[ans_left], liquids[ans_right]].join(" "));
