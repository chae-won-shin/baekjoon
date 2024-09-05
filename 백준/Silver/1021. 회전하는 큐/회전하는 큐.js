const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);

const queue = Array.from({ length: n }, (_, index) => index + 1);
let count = 0;

const givenIndex = input[1].split(" ").map((e) => parseInt(e));

for (const findItem of givenIndex) {
  while (queue[0] !== findItem) {
    count++;
    if (queue.indexOf(findItem) <= queue.length / 2) {
      let temp = queue[0];
      queue.shift();
      queue.push(temp);
    } else {
      let temp = queue[queue.length - 1];
      queue.unshift(temp);
      queue.pop();
    }
  }
  queue.shift();
  continue;
}

console.log(count);
