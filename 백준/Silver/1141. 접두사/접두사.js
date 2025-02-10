const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const words = input.slice(1);
const new_words = new Set(words);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (
      words[j] !== words[i] &&
      words[j].startsWith(words[i]) &&
      new_words.has(words[i])
    ) {
      new_words.delete(words[i]);
    }
  }
}

console.log(new_words.size);
