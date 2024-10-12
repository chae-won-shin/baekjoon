function solution(d, budget) {
    const array = d.sort((a,b)=>a-b);
    console.log(array)
    let total = 0;
    let answer = 0;
    let i = 0;
   
    for (i = 0; i<array.length; i++) {
        total += array[i];
  
        if (total > budget) {
            answer = i;
            break;
        }
        if (total === budget) {
            answer = i+1;
            break;
        }
    }
    
    if (i === array.length) answer = i;
    
    return answer;
}

