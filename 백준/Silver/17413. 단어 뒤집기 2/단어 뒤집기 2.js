const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const answer = [];
let word = [];
let count = 0;

function swap(arr) {
  let value = [];
  const len = arr.length;
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    value[i] = arr[len - 1 - i];
    value[len - 1 - i] = arr[i];
  }

  return value;
}

while (count < input.length) {
  if (input[count] === "<") {
    if (word.length !== 0) {
      const temp = swap(word);
      answer.push(...temp);
      word = [];
    }
    while (input[count] !== ">") {
      answer.push(input[count]);
      count++;
    }
    answer.push(input[count]);
  } else if (input[count] === " ") {
    const temp = swap(word);
    temp.push(" ");
    answer.push(...temp);
    word = [];
  } else {
    word.push(input[count]);
  }
  count++;
}

if (word.length !== 0) {
  const temp = swap(word);
  answer.push(...temp);
}

console.log(answer.join(""));
