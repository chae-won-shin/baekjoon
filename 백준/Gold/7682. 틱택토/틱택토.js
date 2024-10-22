const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [];

const check = (tiktakto) => {
    // 가로 체크
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === tiktakto && board[i][1] === tiktakto && board[i][2] === tiktakto) {
            return true;
        }
    }
    // 세로 체크
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === tiktakto && board[1][j] === tiktakto && board[2][j] === tiktakto) {
            return true;
        }
    }
    // 대각선 체크
    if (board[0][0] === tiktakto && board[1][1] === tiktakto && board[2][2] === tiktakto) {
        return true;
    }
    if (board[0][2] === tiktakto && board[1][1] === tiktakto && board[2][0] === tiktakto) {
        return true;
    }

    return false;
};

const processInput = (input) => {
    let results = [];

    for (let s of input) {
        if (s === "end") break;

        let xCnt = 0;
        let oCnt = 0;
        board = Array.from({ length: 3 }, () => Array(3));

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = s[3 * i + j];

                if (board[i][j] === 'X') xCnt++;
                else if (board[i][j] === 'O') oCnt++;
            }
        }

        // 게임판이 꽉 채워졌을 때
        if (oCnt + xCnt === 9 && xCnt - oCnt === 1) {
            if (check('X') && check('O')) results.push("invalid");
            else if (check('O')) results.push("invalid");
            else results.push("valid");
        } else {
            if (check('X') && check('O')) results.push("invalid");
            else if (check('X') && xCnt - oCnt === 1) results.push("valid");
            else if (check('O') && xCnt === oCnt) results.push("valid");
            else results.push("invalid");
        }
    }

    console.log(results.join("\n"));
};

const inputs = [];
rl.on('line', (line) => {
    inputs.push(line);
}).on('close', () => {
    processInput(inputs);
});
