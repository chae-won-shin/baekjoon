const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let index = 0;
const T = parseInt(input[index++]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = ([a, b], graph, M, N) => {
  let queue = [[a, b]];
  graph[a][b] = 0;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (graph[nx][ny] == 1) {
        queue.push([nx, ny]);
        graph[nx][ny] = 0;
      }
    }
  }
};

for (let t = 0; t < T; t++) {
  let [M, N, K] = input[index++].split(" ").map(Number);
  let graph = Array.from({ length: M }, () => Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    let [x, y] = input[index++].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let worms = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] == 1) {
        bfs([i, j], graph, M, N);
        worms++;
      }
    }
  }

  console.log(worms);
}
