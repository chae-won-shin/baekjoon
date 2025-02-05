const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const MAX_N = 20000;
const N = parseInt(input[0]);
const arr = [null, ...input[1].split(" ").map(Number)]; // 1-based index
const same = Array(MAX_N + 5).fill(false);

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

function checkCycle(start) {
    let cycleCnt = 1;
    let next = arr[start];

    while (true) {
        // 처음 상태로 돌아오는 경우
        if (start === next) {
            return cycleCnt;
        }
        // 같은 cycle에 포함되는 위치 표시
        same[next] = true;
        // 다음 위치
        next = arr[next];
        cycleCnt++;
    }
}

let ans = 1;
for (let i = 1; i <= N; i++) {
    if (same[i]) continue;
    ans = lcm(ans, checkCycle(i));
}

console.log(ans);
