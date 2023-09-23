let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));

let [n,l] = input[0];
let list = input[1];
let cnt = 0;
let boundary = 0;

list.sort((a,b)=>a-b);

for(let i=0; i<n; i++){
    if(boundary<list[i]){
        cnt++;
        boundary = list[i]+l-0.5;
    }
}

console.log(cnt);