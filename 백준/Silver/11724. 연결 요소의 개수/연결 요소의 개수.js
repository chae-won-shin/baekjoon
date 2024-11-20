const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, _] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((e) => e.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
let visited = new Array(N + 1).fill(0);

edges.forEach((edge) => {
  const [u, v] = edge;
  graph[u].push(v);
  graph[v].push(u);
});

const dfs = (v) => {
  visited[v] = 1;

  for (const x of graph[v]) {
    if (!visited[x]) dfs(x);
  }
};

let count = 0;
for (let i = 1; i < N + 1; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);
