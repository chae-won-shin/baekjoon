const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = [null, ...input[1].split(" ").map(Number)];
const same = Array(20005).fill(false);

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function cycle(start) {
  let count = 1;
  let next = arr[start];

  while (true) {
    if (start === next) {
      return count;
    }

    same[next] = true;
    next = arr[next];
    count++;
  }
}

let answer = 1;
for (let i = 1; i <= n; i++) {
  if (same[i]) continue;
  answer = lcm(answer, cycle(i));
}

console.log(answer);
