const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(Number);
const ans = [];

function promising(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function dfs() {
  if (ans.length === m) {
    console.log(ans.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!ans.includes(i)) {
      if (ans.length === 0) {
        ans.push(i);
        dfs();
        ans.pop();
      } else {
        if (i > ans[ans.length - 1]) {
          ans.push(i);
          dfs();
          ans.pop();
        }
      }
    }
  }
}

dfs();
