const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
const ans = [];
let res = "";

function dfs(depth) {
  if (depth === m) {
    res += `${ans.join(" ")}\n`;
    return;
  }

  for (const i of arr) {
    if (!ans.includes(i)) {
      ans.push(i);
      dfs(depth + 1);
      ans.pop();
    }
  }
}

dfs(0);
console.log(res);
