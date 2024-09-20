const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((value) => +value));

const solution = () => {
  const houses = input[0][0];
  const sum = Array.from({ length: houses + 1 }, () => []);
  sum[0][0] = sum[0][1] = sum[0][2] = 0;

  for (let i = 1; i <= houses; i++) {
    sum[i][0] = Math.min(sum[i - 1][1], sum[i - 1][2]) + input[i][0];
    sum[i][1] = Math.min(sum[i - 1][0], sum[i - 1][2]) + input[i][1];
    sum[i][2] = Math.min(sum[i - 1][0], sum[i - 1][1]) + input[i][2];
  }

  return Math.min(sum[houses][0], sum[houses][1], sum[houses][2]);
};

console.log(solution());
