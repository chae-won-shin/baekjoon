function solution(numbers) {
    const answer = [];
    
    numbers.forEach((e,i) => {
        for(let j = 0; j<numbers.length; j++){
            if(j !== i){
                answer.push(e + numbers[j]);
            }
        }
    })
    
    return [...new Set(answer)].sort((a,b) => a-b);
}