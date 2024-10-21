const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const sum = (arr) => {
  let ans = 0;
  arr.forEach((e) => (ans += e));

  return ans;
};

const str = input.split("-");
let answer = 0;

const elements = str.map((e) => e.split("+").map((v) => +v));

if (input[0] === "-") {
  elements.shift();
  elements[0].forEach((e) => (answer -= e));
} else {
  elements[0].forEach((e) => (answer += e));
}

elements.shift();
elements.forEach((e) => {
  answer -= sum(e);
});

console.log(answer);
