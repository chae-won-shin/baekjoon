const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);
const str = input[1].split("");
const [A, C, G, T] = input[2].split(" ").map(Number);
let answer = 0;

let [a, c, g, t] = [0, 0, 0, 0];

for (let i = 0; i < P; i++) {
  if (str[i] === "A") a++;
  if (str[i] === "C") c++;
  if (str[i] === "G") g++;
  if (str[i] === "T") t++;
}

if (a >= A && c >= C && g >= G && t >= T) answer++;

for (let i = P; i < S; i++) {
  if (str[i] === "A") a++;
  if (str[i] === "C") c++;
  if (str[i] === "G") g++;
  if (str[i] === "T") t++;

  const startChar = str[i - P];
  if (startChar === "A") a--;
  if (startChar === "C") c--;
  if (startChar === "G") g--;
  if (startChar === "T") t--;

  if (a >= A && c >= C && g >= G && t >= T) answer++;
}

console.log(answer);
