const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = [...input.matchAll("a")].length;

const str = input + input.substring(0, a - 1);
let count = Infinity;

for (let i = 0; i < input.length; i++) {
  const group = str.substring(i, i + a);
  const b = [...group.matchAll("b")].length;

  if (b < count) count = b;
}

console.log(count);
