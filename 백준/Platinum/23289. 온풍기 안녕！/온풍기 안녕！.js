const fs = require("fs");

class Pos {
  constructor(y, x, dir = -1) {
    this.y = y;
    this.x = x;
    this.dir = dir;
  }
}

const dy = [0, 0, 0, -1, 1];
const dx = [0, 1, -1, 0, 0];
const spreadY = [
  [0, 0, 0],
  [0, -1, 1],
  [0, -1, 1],
  [-1, -1, -1],
  [1, 1, 1],
];
const spreadX = [
  [0, 0, 0],
  [1, 1, 1],
  [-1, -1, -1],
  [0, -1, 1],
  [0, -1, 1],
];

let N, M, K;
let map;
let plus;
let wall = [];
let machines = [];
let checkList = [];

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const firstLine = input[0].split(" ").map(Number);
N = firstLine[0];
M = firstLine[1];
K = firstLine[2];

map = Array.from({ length: N }, () => Array(M).fill(0));
wall = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Array(M).fill(false))
  )
);

for (let i = 0; i < N; i++) {
  const row = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    const temp = row[j];
    if (temp === 5) {
      checkList.push(new Pos(i, j));
    } else if (temp !== 0) {
      machines.push(new Pos(i, j, temp));
    }
  }
}

const cnt = Number(input[N + 1]);
for (let i = 0; i < cnt; i++) {
  const [y, x, t] = input[N + 2 + i].split(" ").map(Number);
  if (t === 0) {
    wall[y - 1][x - 1][y - 2][x - 1] = true;
    wall[y - 2][x - 1][y - 1][x - 1] = true;
  } else {
    wall[y - 1][x - 1][y - 1][x] = true;
    wall[y - 1][x][y - 1][x - 1] = true;
  }
}

let choco = 0;

while (choco <= 100 && !checkTemp()) {
  workMachine();
  adjust();
  choco++;
}

console.log(choco);

function workMachine() {
  plus = Array.from({ length: N }, () => Array(M).fill(0));
  machines.forEach((machine) => {
    work(machine.y, machine.x, machine.dir);
  });

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      map[y][x] += plus[y][x];
    }
  }
}

function work(i, j, dir) {
  const visit = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [];
  let t = 5;

  let ny = i + dy[dir];
  let nx = j + dx[dir];

  visit[ny][nx] = true;
  plus[ny][nx] += 5;
  queue.push(new Pos(ny, nx, 2));

  while (queue.length) {
    const now = queue.shift();
    const y = now.y;
    const x = now.x;
    const dis = now.dir;

    if (dis > 5) continue;

    for (let d = 0; d < 3; d++) {
      ny = y + spreadY[dir][d];
      nx = x + spreadX[dir][d];
      if (!isRange(ny, nx)) continue;
      if (visit[ny][nx]) continue;
      if (isWall(y, x, ny, nx, dir)) continue;

      visit[ny][nx] = true;
      plus[ny][nx] += t - dis + 1;
      queue.push(new Pos(ny, nx, dis + 1));
    }
  }
}

function isWall(y, x, ny, nx, machineDir) {
  if (y === ny || x === nx) {
    if (wall[y][x][ny][nx]) return true;
  } else {
    if (machineDir === 1 || machineDir === 2) {
      if (wall[y][x][ny][x] || wall[ny][x][ny][nx]) return true;
    } else {
      if (wall[y][x][y][nx] || wall[y][nx][ny][nx]) return true;
    }
  }
  return false;
}

function adjust() {
  plus = Array.from({ length: N }, () => Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) continue;
      _adjust(i, j);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      map[i][j] += plus[i][j];
      if (i === 0 || j === 0 || i === N - 1 || j === M - 1) {
        if (map[i][j] > 0) map[i][j]--;
      }
    }
  }
}

function _adjust(i, j) {
  for (let d = 1; d < 5; d++) {
    const ny = i + dy[d];
    const nx = j + dx[d];
    if (!isRange(ny, nx)) continue;
    if (wall[i][j][ny][nx]) continue;
    if (map[i][j] > map[ny][nx]) {
      const temp = Math.floor((map[i][j] - map[ny][nx]) / 4);
      plus[i][j] -= temp;
      plus[ny][nx] += temp;
    }
  }
}

function checkTemp() {
  return checkList.every((pos) => map[pos.y][pos.x] >= K);
}

function isRange(i, j) {
  return i >= 0 && j >= 0 && i < N && j < M;
}
