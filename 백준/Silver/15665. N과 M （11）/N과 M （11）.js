const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const ans = [];
const res = new Set();

function dfs(depth) {
  if (depth === m) {
    res.add(`${ans.join(" ")}`);
    return;
  }

  for (const i of arr) {
    ans.push(i);
    dfs(depth + 1);
    ans.pop();
  }
}

dfs(0);
console.log([...res].join("\n"));
