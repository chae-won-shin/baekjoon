from collections import deque

T = int(input())

for tc in range(T):
    N, M = map(int, input().split())

    s = deque(input().split())
    t = deque(input().split())

    last_s = s.pop()
    s.appendleft(last_s)
    last_t = t.pop()
    t.appendleft(last_t)
    ans = []
    
    Q = int(input())
    for q in range(Q):
        Y = int(input())
        s_index = Y % N
        t_index = Y % M
        ans.append(s[s_index]+t[t_index])
        
    print(f'#{tc+1} {" ".join(ans)}')
        