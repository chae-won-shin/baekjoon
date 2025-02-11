const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
const room = input.slice(2).map((e) => e.split(" ").map(Number));
let visited = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

visited[r][c] = true;
let count = 1;

while (true) {
  let flag = false;

  for (let i = 0; i < 4; i++) {
    const nx = r + dx[(d + 3) % 4];
    const ny = c + dy[(d + 3) % 4];
    d = (d + 3) % 4;

    if (0 <= nx && nx < n && 0 <= ny && ny < m && room[nx][ny] === 0) {
      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        count++;
        [r, c] = [nx, ny];
        flag = true;
        break;
      }
    }
  }

  if (!flag) {
    if (room[r - dx[d]][c - dy[d]] === 1) {
      console.log(count);
      break;
    } else {
      [r, c] = [r - dx[d], c - dy[d]];
    }
  }
}
