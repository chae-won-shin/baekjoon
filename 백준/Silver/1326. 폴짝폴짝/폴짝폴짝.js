const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const bridge = input[1].split(" ").map((v) => +v);
const [a, b] = input[2].split(" ").map((v) => +v);

const bfs = (N, bridge, a, b) => {
  const queue = [a - 1];

  const visited = new Array(N).fill(-1);
  visited[a - 1] = 0;

  while (queue.length) {
    const target = queue.shift();

    for (let i = target; i < N; i += bridge[target]) {
      if (visited[i] === -1) {
        queue.push(i);
        visited[i] = visited[target] + 1;

        if (i === b - 1) return visited[i];
      }
    }

    for (let i = target; i > -1; i -= bridge[target]) {
      if (visited[i] === -1) {
        queue.push(i);
        visited[i] = visited[target] + 1;

        if (i === b - 1) return visited[i];
      }
    }
  }

  return -1;
};

console.log(bfs(N, bridge, a, b));
