const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [xs, ys] = input[0].split(" ").map((value) => +value);
let [xe, ye, dx, dy] = input[1].split(" ").map((value) => +value);
let gcf = 0;

if (dx !== 0 && dy !== 0) {
  for (let i = 1; i <= Math.min(Math.abs(dx), Math.abs(dy)); i++) {
    if (Math.abs(dx) % i === 0 && Math.abs(dy) % i === 0) {
      gcf = i;
    }
  }
  dx = dx / gcf;
  dy = dy / gcf;
}

if (dx === 0) {
  dy = dy > 0 ? 1 : -1;
}

if (dy === 0) {
  dx = dx > 0 ? 1 : -1;
}

let answer = Infinity;

while (1) {
  let dist = Math.pow(xs - xe, 2) + Math.pow(ys - ye, 2);
  if (answer > dist) answer = dist;
  else break;

  xe += dx;
  ye += dy;
}

console.log(xe - dx, ye - dy);
