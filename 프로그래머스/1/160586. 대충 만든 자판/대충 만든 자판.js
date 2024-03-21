function solution(keymap, targets) {

    const answer = [];
    const existChar = {};
    
    for(const keyArrange of keymap) {
        for(let i = 0; i<keyArrange.length; i++){
            const key = keyArrange[i];
            existChar[key] = existChar[key] ? Math.min(existChar[key], i+1) : i+1;
        }
    }
    
    targets.forEach((t) => {
        let cnt = 0;
        for(let j = 0; j<t.length; j++) {
            if(!Object.keys(existChar).includes(t[j])) {
                cnt = -1;
                break;
            } else {
                cnt += existChar[t[j]];
            }
        }
        answer.push(cnt);
    })
    console.log(answer);
    return answer;
}
