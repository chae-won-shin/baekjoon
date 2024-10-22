const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(""))
  .slice(0, -1);

const board = Array.from({ length: 3 }, () => Array(3));

const isConnected = (letter) => {
  // 가로
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === letter &&
      board[i][1] === letter &&
      board[i][2] === letter
    )
      return true;
  }

  // 세로
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] === letter &&
      board[1][j] === letter &&
      board[2][j] === letter
    )
      return true;
  }

  // 대각선
  if (
    board[0][0] === letter &&
    board[1][1] === letter &&
    board[2][2] === letter
  )
    return true;
  if (
    board[0][2] === letter &&
    board[1][1] === letter &&
    board[2][0] === letter
  )
    return true;

  return false;
};

input.forEach((game) => {
  const results = [];

  let xCnt = 0;
  let oCnt = 0;

  // 게임판 만들기
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = game[3 * i + j];

      if (board[i][j] === "X") xCnt++;
      else if (board[i][j] === "O") oCnt++;
    }
  }

  // 게임판이 꽉 찬 경우: X = O+1
  if (oCnt + xCnt === 9 && xCnt === oCnt + 1) {
    if (isConnected("X") && isConnected("O")) results.push("invalid");
    else if (isConnected("O")) results.push("invalid");
    else results.push("valid");
  }
  // 게임판이 꽉 차지 않고 중간에 끝난 경우
  else {
    if (isConnected("X") && isConnected("O")) results.push("invalid");
    else if (isConnected("X") && xCnt === oCnt + 1) results.push("valid");
    else if (isConnected("O") && xCnt === oCnt) results.push("valid");
    else results.push("invalid");
  }

  console.log(results.join("\n"));
});
