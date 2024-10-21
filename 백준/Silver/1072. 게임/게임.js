const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [X, Y] = input.split(" ").map((v) => +v);
const Z = Math.floor((Y * 100) / X);

let left = 0;
let right = 1000000000;
let result = 0;

if (Z >= 99) result = -1;
else {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let new_Z = Math.floor(((Y + mid) * 100) / (X + mid));

    if (new_Z > Z) {
      result = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
}

console.log(result);
