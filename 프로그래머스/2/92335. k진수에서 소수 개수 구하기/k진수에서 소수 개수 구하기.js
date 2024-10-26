1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59

	
function solution(n, k) {
    let converted_number = [];

    let q = Math.floor(n / k), r = n % k;
    converted_number.push(r);

    while(q !== 0){
        r = q % k;
        q = Math.floor(q / k);
        converted_number.push(r);
    }
    converted_number = converted_number.reverse();

    let check = [];
    let answer = [];

    for (let i = 0; i<converted_number.length; i++) {
        const e = converted_number[i];

        if (e !== 0)
            check.push(e);
        else {
            if (check.length === 0) continue;
            const temp = parseInt(check.join(""));
            const flag = isPrime(temp);
            if (flag === true) {
                answer.push(temp);
            }
            check = [];
        }

    }

    if(check.length !== 0) {
        const last_temp = parseInt(check.join(""));
        const last_flag = isPrime(last_temp);
        if (last_flag === true) {
            answer.push(last_temp);
        }
    }

    return answer.length;
}

function isPrime(num) {
    if (num === 1)
        return false;

    if (num === 2)
        return true;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if (num % i === 0)
            return false;
    }

    return true;
}

