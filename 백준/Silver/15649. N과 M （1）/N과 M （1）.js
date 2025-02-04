const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(Number);
const ans = [];

function dfs() {
  if (ans.length === m) {
    console.log(ans.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!ans.includes(i)) {
      ans.push(i);
      dfs();
      ans.pop();
    }
  }
}

dfs();
