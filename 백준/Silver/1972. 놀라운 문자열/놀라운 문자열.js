const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const strings = input.slice(0, -1);

strings.forEach((string) => {
  const str = string.split("");
  const length = str.length - 1;

  const D_set = Array.from({ length }, () => []);
  let surprising = true;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      D_set[i].push([str[j], str[j + i + 1]].join(""));
    }

    const new_set = [...new Set(D_set[i])];
    if (new_set.length !== D_set[i].length) surprising = false;
  }

  if (surprising === true) console.log(`${string} is surprising.`);
  else console.log(`${string} is NOT surprising.`);
});
