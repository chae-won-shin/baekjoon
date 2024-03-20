function solution(name, yearning, photo) {
    
    const score = {};
    name.map((e,i) => {
       score[e] = yearning[i];
    });
    
    //console.log(score);
    var answer = [];
    let result = 0;
    
    photo.forEach((e) => {
        e.forEach((exist) => {
            if(name.includes(exist)){
                result += score[exist];
            }
        });
        //console.log(result);
        answer.push(result);
        result = 0;
    })
    
    return answer;
}

//name = ['may', 'kein', 'kain', 'radi']
//yearning = [5, 10, 1, 3]
//photo = [ ['may', 'kein', 'kain', 'radi'], ['may', 'kein', 'brin', 'deny'],
//          ['kon', 'kain', 'may', 'coni'] ]
//result = [19, 15, 6]