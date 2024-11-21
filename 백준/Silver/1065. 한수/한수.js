const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);
let answer = 99;

const isHansu = (n) => {
  const num = n.toString().split("").map(Number);
  let sub = num[1] - num[0];
  for (let i = 2; i < num.length; i++) {
    if (num[i] - num[i - 1] !== sub) return false;
  }
  return true;
};

if (N < 100) answer = N;

if (N >= 100) {
  for (let i = 100; i <= N; i++) {
    if (isHansu(i)) answer++;
  }
}

console.log(answer);
