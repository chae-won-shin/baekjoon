const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0].split("");
const bomb = input[1].split("");
const m = bomb.length;

const stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (str[i] === bomb[m - 1]) {
    if (stack.length >= m && stack.slice(-m).join("") === bomb.join("")) {
      for (let j = 0; j < m; j++) stack.pop();
    }
  }
}

if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));
