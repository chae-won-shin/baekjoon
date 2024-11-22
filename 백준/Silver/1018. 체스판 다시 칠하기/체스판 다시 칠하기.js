const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); // N 세로 M 가로
const board = input.slice(1).map((e) => e.split(""));
const count = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let black = 0;
    let white = 0;

    for (let a = i; a < i + 8; a++) {
      for (let b = j; b < j + 8; b++) {
        if ((a + b) % 2 === 0) {
          if (board[a][b] !== "W") {
            white++;
          } else if (board[a][b] !== "B") {
            black++;
          }
        } else {
          if (board[a][b] !== "B") {
            white++;
          } else if (board[a][b] !== "W") {
            black++;
          }
        }
      }
    }

    count.push(white);
    count.push(black);
  }
}

console.log(Math.min(...count));
