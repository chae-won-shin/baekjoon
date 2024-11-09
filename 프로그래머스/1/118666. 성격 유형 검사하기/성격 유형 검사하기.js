function solution(survey, choices) {
    let points = {
        'R': 0, 
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0
    }
    let answer = ['','','',''];
    
    survey.forEach((e, i) => {
        if(choices[i]-4 < 0) {
            points[e[0]] += Math.abs(choices[i]-4);
        }
        
        if(choices[i]-4 > 0) {
            points[e[1]] += choices[i]-4;
        }
    })
    
    answer[0] = points['R'] < points['T'] ? 'T' : 'R';
    answer[1] = points['C'] < points['F'] ? 'F' : 'C';
    answer[2] = points['J'] < points['M'] ? 'M' : 'J';
    answer[3] = points['A'] < points['N'] ? 'N' : 'A';
    
    return answer.join("");
}


