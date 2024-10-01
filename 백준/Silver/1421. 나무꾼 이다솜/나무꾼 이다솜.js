const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, c, w] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const woods = [];

input.forEach((item) => {
  woods.push(parseInt(item));
});

const max_l = Math.max(...woods);

let max_money = 0;
let profit = 0;
let expense = 0;

for (let l = 1; l <= max_l; l++) {
  let profit_sum = 0;
  for (wood of woods) {
    let q = Math.floor(wood / l);
    let r = wood % l;
    // console.log(q, r);

    if (r === 0) expense = (q - 1) * c;
    else expense = q * c;

    profit = q * l * w - expense;
    if (profit < 0) continue;
    profit_sum += profit;

    if (profit_sum > max_money) max_money = profit_sum;
  }
}

console.log(max_money);
