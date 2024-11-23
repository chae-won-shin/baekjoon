const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);
let count = 0;
let board = new Array(N).fill(0);

const promising = (row) => {
  for (let i = 0; i < row; i++) {
    if (board[row] === board[i] || row - i === Math.abs(board[row] - board[i]))
      return false;
  }
  return true;
};

const nQueen = (row) => {
  if (row === N) {
    count++;
    return;
  }

  for (let col = 0; col < N; col++) {
    board[row] = col;

    if (promising(row)) {
      nQueen(row + 1);
    }
  }
};

nQueen(0);
console.log(count);
