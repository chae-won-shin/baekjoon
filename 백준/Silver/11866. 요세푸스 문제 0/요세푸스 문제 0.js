const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let idx = 1;
const queue = Array.from({ length: N }, () => idx++);

let cnt = 1;
const answer = [];

while (queue.length) {
  const item = queue.shift();
  if (cnt % K === 0) answer.push(item);
  else queue.push(item);

  cnt++;
}

console.log(`<${answer.join(", ")}>`);
