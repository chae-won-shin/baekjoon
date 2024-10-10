const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, _, S] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const graph = Array.from({ length: N + 1 }, () => []);

input.forEach((edge) => {
  const [v1, v2] = edge.split(" ").map((v) => +v);
  graph[v1].push(v2);
  graph[v2].push(v1);
});

graph.forEach((edge) => {
  edge.sort((a, b) => a - b);
});

const dfs = (v, visited = []) => {
  visited.push(v);

  for (const cur of graph[v]) {
    if (!visited.includes(cur)) {
      dfs(cur, visited);
    }
  }

  return visited.join(" ");
};

const bfs = (start) => {
  const visited = [];
  const queue = [start];

  while (queue.length) {
    let v = queue.shift();
    if (!visited.includes(v)) {
      visited.push(v);
      graph[v].forEach((vertex) => queue.push(vertex));
    }
  }

  return visited.join(" ");
};

console.log(dfs(S));
console.log(bfs(S));
