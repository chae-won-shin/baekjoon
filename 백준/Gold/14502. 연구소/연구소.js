const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((e) => e.split(" ").map(Number));
let ans = -1;

// 벽 세우기
function dfs(depth) {
  if (depth === 3) {
    bfs();
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        dfs(depth + 1);
        board[i][j] = 0;
      }
    }
  }
}

function bfs() {
  const graph = board.map((row) => row.slice());

  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (graph[nx][ny] === 0) {
          graph[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) count++;
    }
  }

  ans = ans > count ? ans : count;
}

dfs(0);
console.log(ans);
