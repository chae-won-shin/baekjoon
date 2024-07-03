function solution(answers) {
    var answer = [];
    
    let person1 = [1,2,3,4,5];
    let person2 = [2,1,2,3,2,4,2,5];
    let person3 = [3,3,1,1,2,2,4,4,5,5];
    
    if(person1.length<answers.length){
        while(person1.length<answers.length)
            person1 = person1.concat(person1);
    } 
    person1 = person1.slice(0, answers.length);
    
    if(person2.length<answers.length){
        while(person2.length<answers.length)
            person2 = person2.concat(person2);
    } 
    person2 = person2.slice(0, answers.length);
    
    if(person3.length<answers.length){
        while(person3.length<answers.length)
            person3 = person3.concat(person3);
    } 
    person3 = person3.slice(0, answers.length);
    
    let points = [0,0,0];
    
    person1.forEach((e,i) => {
        if(e === answers[i]) points[0]++;
    })
    
    person2.forEach((e,i) => {
        if(e === answers[i]) points[1]++;
    })
    
    person3.forEach((e,i) => {
        if(e === answers[i]) points[2]++;
    })

    let bestPoint = Math.max(...points);
    points.forEach((e,i) => {
        if(e === bestPoint)
            answer.push(i+1);
    })
    
    return answer;
}