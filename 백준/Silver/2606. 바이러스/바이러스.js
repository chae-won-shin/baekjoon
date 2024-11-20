const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const computers = parseInt(input[0]);
const networks = input.slice(2).map((e) => e.split(" ").map(Number));
const graph = Array.from({ length: computers + 1 }, () => []);
const visited = new Array(computers + 1).fill(0);

networks.forEach((network) => {
  graph[network[0]].push(network[1]);
  graph[network[1]].push(network[0]);
});

const dfs = (v) => {
  visited[v] = 1;

  for (const x of graph[v]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
};

const sum = (arr) => {
  const res = arr.reduce((acc, cur) => acc + cur, 0);
  return res;
};

dfs(1);
console.log(sum(visited) - 1);
