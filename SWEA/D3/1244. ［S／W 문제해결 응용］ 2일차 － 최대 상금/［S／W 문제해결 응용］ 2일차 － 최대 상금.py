def dfs(n):
   global answer
   if n==N:
       answer = max(answer, int(''.join(map(str, lst))))
       return
   for i in range(L-1):
       for j in range(i+1, L):
           lst[i], lst[j] = lst[j], lst[i]
           check = int(''.join(map(str, lst)))
           if(n, check) not in visited:
               dfs(n+1)
               visited.add((n,check))
           
           lst[j], lst[i] = lst[i], lst[j]

T = int(input())

for t in range(T):
    origin, times = map(int, input().split())
    N = int(times)
    lst = list(str(origin))
    L = len(lst)
    visited = set()
    answer = 0

    
    dfs(0)

    print(f'#{t+1} {answer}')
