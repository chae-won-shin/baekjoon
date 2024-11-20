const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const rgb_graph = input.slice(1).map((e) => e.split(""));
const rb_graph = input.slice(1).map((e) => e.replaceAll("G", "R").split(""));
const rgb_visited = Array.from({ length: N }, () => new Array(N).fill(false));
const rb_visited = Array.from({ length: N }, () => new Array(N).fill(false));

const bfs = (i, j, graph, color, visited) => {
  queue = [[i, j]];
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  visited[i][j] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < N &&
        graph[nx][ny] === color &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

let rgb_count = 0;
let rb_count = 0;
const rgb = ["R", "G", "B"];
const rb = ["R", "B"];

rgb.forEach((color) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!rgb_visited[i][j] && rgb_graph[i][j] === color) {
        bfs(i, j, rgb_graph, color, rgb_visited);
        rgb_count++;
      }
    }
  }
});

rb.forEach((color) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!rb_visited[i][j] && rb_graph[i][j] === color) {
        bfs(i, j, rb_graph, color, rb_visited);
        rb_count++;
      }
    }
  }
});

console.log(`${rgb_count} ${rb_count}`);
