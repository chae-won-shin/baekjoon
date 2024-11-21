const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let max = -Infinity;

const sum = (arr) => {
  const res = arr.reduce((acc, cur) => acc + cur, 0);
  return res;
};

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let temp = sum([cards[i], cards[j], cards[k]]);
      if (temp <= M && temp > max) {
        max = temp;
      }
    }
  }
}

console.log(max);
