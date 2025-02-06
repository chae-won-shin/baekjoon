const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arrays = input.slice(1).map((e) => e.split(" ").map(Number));

arrays.forEach((array) => {
  const n = array[0];
  const arr = array.slice(1);
  arr.sort((a, b) => a - b);

  let psum = new Array(n).fill(0);
  psum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }

  let res = 0;
  for (let i = 2; i <= n; i++) {
    res += get_sum(arr, psum, i);
  }

  console.log(res);
});

function get_sum(arr, psum, i) {
  let min = Infinity;

  let temp = 0;
  for (let j = i - 1; j < arr.length; j++) {
    temp = arr[j] * i - (psum[j] - (j - i > -1 ? psum[j - i] : 0));
    min = Math.min(min, temp);
  }

  return min;
}
