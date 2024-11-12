const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];

for (let i = 1; i < T * 2; i += 2) {
  const [_, M] = input[i].split(" ").map(Number);
  const queue = new Map();
  const firstList = input[i + 1].split(" ").map(Number);
  const printList = new Map();

  firstList.forEach((element, idx) => {
    const key = idx;
    queue.set(key, element);
  });

  while (queue.size > 0) {
    let max = Math.max(...queue.values());
    let cur = queue.entries().next().value;

    if (cur[1] < max) {
      queue.delete(cur[0]);
      queue.set(cur[0], cur[1]);
    }

    if (cur[1] === max) {
      printList.set(cur[0], cur[1]);
      queue.delete(cur[0]);
    }
  }

  let pos = 0;
  for (let [key, _] of printList) {
    if (key === M) break;
    else pos++;
  }

  console.log(pos + 1);
}
