function solution(num) {
    let x = parseInt(num, 10);
    
    const arr = [];
    arr[1] = 0;

    for(let i = 2; i <= x; i++){
        arr[i] = arr[i-1] + 1;
        if(i%3 === 0) arr[i] = Math.min(arr[i], arr[i/3]+1);
        if(i%2 === 0) arr[i] = Math.min(arr[i], arr[i/2]+1);
    }

    console.log(arr[x]);
}


  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let input = [];
  let arr = [];
  
  rl.on('line', (line) => {
    // 여러 줄 입력
    input.push(line);
    // rl.close()가 없어서 계속 입력 (local에서 입력을 중지: ctrl + D)
  }).on('close', () => {
    // 입력 값 처리
    let n = parseInt(input[0]);
  
    if (typeof input[1] === Number) {
      // 띄어쓰기 기준으로 배열에 넣기
      let arr = input.map((el) => el.split(' ').map((el) => parseInt(el)));
    }
    let arr = input.map((el) => el.split(' ').map((el) => el));
  
    solution(arr);
    process.exit();
  });