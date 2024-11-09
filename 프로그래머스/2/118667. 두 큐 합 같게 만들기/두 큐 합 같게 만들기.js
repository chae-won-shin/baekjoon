function solution(queue1, queue2) {
    const total = [...queue1, ...queue2];
    const goal = sum(total)/2;
    let count = 0;
    
    let start = 0;
    let end = queue1.length;
    let sum1 = sum(total.slice(start, end));
    
    while (count < total.length * 2 && sum1 !== goal) {
        if (sum1 < goal) {
            sum1 += total[end];
            end++;
        } else if (sum1 > goal) {
            sum1 -= total[start];
            start++;
        }
        
        count++;
    }
    
    if (sum1 !== goal) count = -1;
    
    return count;
}

function sum(arr) {
    let res = 0;
    arr.forEach(e => res += e )
    return res;
}

// 길이가 같은 2개의 큐
// 둘 중 하나 골라서 pop
// pop한 걸 다른 큐에 insert
// 반복 -> 각 큐 원소 합 같게 -> 작업(pop+insert)의 최소횟수?