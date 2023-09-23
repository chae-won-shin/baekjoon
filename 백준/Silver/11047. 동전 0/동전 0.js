let input =  require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));

let [n,k] = input[0];
let coins = input.slice(1);
let cnt = 0;

for(let i = n-1; i>=0; i--){
    
    let tmp = Math.floor(k/coins[i]);
    cnt += tmp;
    k -= tmp*coins[i];
}

console.log(cnt);
