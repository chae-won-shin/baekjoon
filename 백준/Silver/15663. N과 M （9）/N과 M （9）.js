const { NOTFOUND } = require("dns");
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const visited = Array.from({ length: arr.length }).map(() => false);
let res = "";

function dfs(ans) {
  if (ans.length === m) {
    res += `${ans.join(" ")}\n`;
    return;
  }

  let pre = -1;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && pre !== arr[i]) {
      visited[i] = true;
      dfs([...ans, arr[i]]);
      visited[i] = false;
      pre = arr[i];
    }
  }
}

dfs([]);
console.log(res);
