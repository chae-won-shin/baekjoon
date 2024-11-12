const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const _ = input.shift();
let answer = [];

input.forEach((element) => {
  const command = element.split(" ");
  if (command[0] === "push") {
    stack.push(command[1]);
  }
  if (command[0] === "pop") {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack.pop());
  }
  if (command[0] === "size") {
    answer.push(stack.length);
  }
  if (command[0] === "empty") {
    answer.push(stack.length === 0 ? 1 : 0);
  }
  if (command[0] === "top") {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[stack.length - 1]);
  }
});

console.log(answer.join("\n"));
