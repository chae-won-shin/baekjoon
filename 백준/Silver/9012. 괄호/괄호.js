const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const strings = input.slice(1).map((e) => e.split(""));
const isValid = new Set();
const answer = [];

strings.forEach((str, idx) => {
  const stack = [];

  for (chr of str) {
    if (chr === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        isValid.add(idx);
        answer.push("NO");
        break;
      } else stack.pop();
    }
  }

  if (!isValid.has(idx)) {
    if (stack.length === 0) answer.push("YES");
    else answer.push("NO");
  }
});

console.log(answer.join("\n"));
