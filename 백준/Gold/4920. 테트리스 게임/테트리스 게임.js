function solution() {
  const test = [];
  let val = -9999999;
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  let index = 0;

  while (true) {
    const n = parseInt(input[index]);
    if (n === 0) break;
    index++;

    const block = [];
    for (let i = 0; i < n; i++) {
      block.push(input[index].trim().split(/\s+/).map(Number));
      index++;
    }
    test.push(block);
  }

  function maxCase(tetris, N) {
    let val = -9999999;

    // |
    for (let i = 0; i < N - 3; i++) {
      for (let j = 0; j < N; j++) {
        val = Math.max(
          val,
          tetris[i][j] + tetris[i + 1][j] + tetris[i + 2][j] + tetris[i + 3][j]
        );
      }
    }
    // ㅁ
    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < N - 1; j++) {
        val = Math.max(
          val,
          tetris[i][j] +
            tetris[i + 1][j] +
            tetris[i][j + 1] +
            tetris[i + 1][j + 1]
        );
      }
    }
    // ㄱㄴ
    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < N - 2; j++) {
        val = Math.max(
          val,
          tetris[i][j] +
            tetris[i][j + 1] +
            tetris[i + 1][j + 1] +
            tetris[i + 1][j + 2]
        );
      }
    }
    // ㅏ
    for (let i = 0; i < N - 2; i++) {
      for (let j = 0; j < N - 1; j++) {
        val = Math.max(
          val,
          tetris[i][j] +
            tetris[i + 1][j] +
            tetris[i + 2][j] +
            tetris[i + 1][j + 1]
        );
      }
    }
    // L
    for (let i = 0; i < N - 2; i++) {
      for (let j = 0; j < N - 1; j++) {
        val = Math.max(
          val,
          tetris[i][j] + tetris[i + 1][j] + tetris[i + 2][j] + tetris[i][j + 1]
        );
      }
    }

    return val;
  }

  function rotate(arr, n) {
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[i][j] = arr[n - j - 1][i];
      }
    }
    return rotated;
  }

  let step = 1;
  for (const arr of test) {
    val = maxCase(arr, arr.length);
    let rArr = rotate(arr, arr.length);
    val = Math.max(val, maxCase(rArr, rArr.length));
    rArr = rotate(rArr, rArr.length);
    val = Math.max(val, maxCase(rArr, rArr.length));
    rArr = rotate(rArr, rArr.length);
    val = Math.max(val, maxCase(rArr, rArr.length));

    console.log(`${step}. ${val}`);
    step++;
  }
}

solution();
