const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const peopleInfo = input.slice(1).map((e) => e.split(" ").map(Number));
const rank = new Array(N).fill(0);

peopleInfo.forEach((main, idx) => {
  let k = 0;
  peopleInfo.forEach((compare) => {
    if (main[0] < compare[0] && main[1] < compare[1]) {
      k++;
    }
  });
  rank[idx] = k + 1;
});

console.log(rank.join(" "));
