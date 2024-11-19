const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, K] = input.shift().split(" ").map(Number);
const squares = input.map((e) => e.split(" ").map(Number));

let matrix = Array.from({ length: M }, () => new Array(N).fill(0));
let visited = Array.from({ length: M }, () => new Array(N).fill(false));
const sizes = [];

squares.forEach((square) => {
  const x_start = square[0];
  const x_end = square[2];
  const y_start = square[1];
  const y_end = square[3];

  for (let i = x_start; i < x_end; i++) {
    for (let j = y_start; j < y_end; j++) {
      matrix[j][i] = 1;
    }
  }
});

const bfs = (matrix, visited, i, j) => {
  const queue = [[i, j]];
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  visited[i][j] = true;
  let size = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        0 <= nx &&
        nx < M &&
        0 <= ny &&
        ny < N &&
        matrix[nx][ny] === 0 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        size++;
      }
    }
  }

  return size;
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && matrix[i][j] === 0) {
      const size = bfs(matrix, visited, i, j);
      sizes.push(size);
    }
  }
}

console.log(sizes.length);
console.log(sizes.sort((a, b) => a - b).join(" "));
