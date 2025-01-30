const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const city = input.slice(1).map((e) => e.split(" ").map(Number));

const get_distance = (r1, c1, r2, c2) => {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
};

const get_combinations = (arr, selectNumber) => {
  const res = [];

  if (selectNumber === 1) {
    return arr.map((val) => [val]);
  }

  arr.forEach((val, idx) => {
    const rest = arr.slice(idx + 1);
    const combinations = get_combinations(rest, selectNumber - 1);
    const attached = combinations.map((comb) => [val, ...comb]);
    res.push(...attached);
  });

  return res;
};

const chicken_shop = [];
const houses = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 2) {
      chicken_shop.push([i, j]);
    }
    if (city[i][j] === 1) {
      houses.push([i, j]);
    }
  }
}

const chicken_combinations = get_combinations(chicken_shop, m);
let min_distance = Infinity;
chicken_combinations.forEach((chicken) => {
  let total_dist = 0;

  houses.forEach((h) => {
    let chicken_dist = Infinity;
    chicken.forEach((c) => {
      let temp = get_distance(h[0], h[1], c[0], c[1]);
      if (temp < chicken_dist) {
        chicken_dist = temp;
      }
    });
    total_dist += chicken_dist;
  });

  if (total_dist < min_distance) {
    min_distance = total_dist;
  }
});

console.log(min_distance);
