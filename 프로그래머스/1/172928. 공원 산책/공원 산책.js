function solution(park, routes) {
      
    const h = park.length;
    const w = park[0].length;
    
    let x = 0, y = 0;
    park.forEach((e,i)=> {
        if(e.includes('S')) {
            x = i;
            y = e.indexOf('S');
        }
    })
    
    const nav = {
        'S': [1,0],
        'N': [-1,0],
        'W': [0,-1],
        'E': [0,1]
    };
    
    routes.forEach((e) => {
        let [dir, dist] = e.split(' ');
        dist = parseInt(dist, 10);
        
        let flag = 0;
        let step_x = x;
        let step_y = y;
        for(let i = 1; i<dist+1; i++){
            step_x += nav[dir][0];
            step_y += nav[dir][1];
            
            if(step_x >= h || step_x <= -1 || step_y >= w || step_y <= -1 || park[step_x][step_y] === 'X') {
                flag = 1;
                break;
            }
        }
        
        if(flag === 0){
            x += nav[dir][0] * dist;
            y += nav[dir][1] * dist;
        }
    })
    
    console.log(x,y);
    var answer = [x, y];
    return answer;
}