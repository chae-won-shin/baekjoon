let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));

let n = input[0];
let p = input[1];

let time = 0;
let temp = 0;

p.sort((a,b)=>a-b);

for(let i=0; i<n; i++){
    temp += p[i];
    time += temp;
}

console.log(time);