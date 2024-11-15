T = int(input())

for t in range(T):
    s, k = input().split()
    k = int(k)
    answer = -1
    
    if s == '.o.':
        if k % 2 == 1: 
            answer = 0
        elif k % 2 == 0:
            answer = 1

    if s == 'o..':
        if k % 2 == 1: 
            answer = 1
        elif k % 2 == 0:
            answer = 0

    if s == '..o':
        if k == 0:
            answer = 2
        elif k % 2 == 1: 
            answer = 1
        elif k % 2 == 0:
            answer = 0  

    print(f'#{t+1} {answer}')  

