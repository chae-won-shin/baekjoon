const fs = require("fs");
const { lutimes } = require("fs/promises");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const len_board = 2 ** N;
let ice_board = input
  .slice(1, len_board + 1)
  .map((e) => e.split(" ").map(Number));
const levels = input[len_board + 1].split(" ").map(Number);

const rotate = (board, L) => {
  const size = 2 ** L;
  const len = board.length;

  let new_board = Array.from({ length: len }, () => Array(len).fill(0));

  for (let sy = 0; sy < len; sy += size) {
    for (let sx = 0; sx < len; sx += size) {
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          new_board[sy + x][sx + size - y - 1] = board[sy + y][sx + x];
        }
      }
    }
  }

  return new_board;
};

const melt = (board) => {
  const len = board.length;
  let new_board = Array.from({ length: len }, () => Array(len).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      let ice_cnt = 0;
      for (let d = 0; d < 4; d++) {
        let nx = x + dx[d];
        let ny = y + dy[d];

        if (0 <= nx && nx < len && 0 <= ny && ny < len) {
          if (board[nx][ny] > 0) ice_cnt++;
        }
      }

      if (ice_cnt < 3) {
        new_board[x][y] = Math.max(board[x][y] - 1, 0);
      } else {
        new_board[x][y] = board[x][y];
      }
    }
  }

  return new_board;
};

const bfs = (board, a, b) => {
  const len = board.length;
  const visited = Array.from({ length: len }, () => Array(len).fill(false));
  const queue = [[a, b]];
  visited[a][b] = true;
  let connected = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let d = 0; d < 4; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (0 <= nx && nx < len_board && 0 <= ny && ny < len_board) {
        if (!visited[nx][ny] && board[nx][ny] > 0) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          connected++;
        }
      }
    }
  }

  return connected;
};

for (let f = 0; f < Q; f++) {
  ice_board = rotate(ice_board, levels[f]);
  ice_board = melt(ice_board);
}

let ice_sum = 0;
let max_ice = 0;

for (let i = 0; i < len_board; i++) {
  for (let j = 0; j < len_board; j++) {
    if (ice_board[i][j] > 0) {
      ice_sum += ice_board[i][j];
      max_ice = Math.max(max_ice, bfs(ice_board, i, j));
    }
  }
}

console.log(ice_sum);
console.log(max_ice);
