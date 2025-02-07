const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const G = parseInt(input);

let prev = 1;
let cur = 2;
const ans = [];

while (true) {
  if (cur ** 2 - (cur - 1) ** 2 > 100000) break;

  if (cur ** 2 - prev ** 2 < G) {
    cur++;
    continue;
  } else if (cur ** 2 - prev ** 2 > G) {
    prev++;
    continue;
  } else if (cur ** 2 - prev ** 2 === G) {
    ans.push(cur);
    cur++;
    continue;
  }
}

if (ans.length === 0) console.log(-1);
else console.log(ans.join("\n"));
