let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => {
    return e.split(" ").map(Number);
  });

const fibo = [];
fibo[0] = 0;
fibo[1] = 1;

input = input.map((e) => parseInt(e));

for (let i = 1; i <= input[0]; i++) {
  if (input[i] === 0) console.log("1 0");
  else if (input[i] === 1)
    console.log(`${fibo[input[i] - 1]} ${fibo[input[i]]}`);
  else {
    for (let j = 2; j <= input[i]; j++) {
      fibo[j] = fibo[j - 1] + fibo[j - 2];
    }
    console.log(`${fibo[input[i] - 1]} ${fibo[input[i]]}`);
  }
}
