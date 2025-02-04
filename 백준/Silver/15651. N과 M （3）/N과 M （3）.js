const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(Number);
const ans = [];
let res = "";

function dfs(depth) {
  if (depth === m) {
    res += `${ans.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    ans.push(i);
    dfs(depth + 1);
    ans.pop();
  }
}

dfs(0);
console.log(res);
