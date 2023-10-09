let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(e=>e.split(" ").map(Number));

const s = input[0]

let i = 1
let sum = 0
let count = 0

while(sum!=s){
    sum += i
    if(sum > s) {
        let diff = sum - s
        sum -= diff
    }
    else {
        i += 1
        count += 1
    }
}0

console.log(count)



