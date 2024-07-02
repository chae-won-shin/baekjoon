let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => {
    return e.split(" ").map(Number);
  });

for (let i = 1; i <= input[0][0]; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i];
  const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (dist === 0 && r1 === r2) console.log(-1);
  else if (r1 + r2 === dist || Math.abs(r2 - r1) === dist) console.log(1);
  else if (Math.abs(r2 - r1) < dist && dist < r1 + r2) console.log(2);
  else console.log(0);
}
