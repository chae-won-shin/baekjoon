from collections import deque

n, k = map(int, input().split())
distance = [0] * 100001
check = [0] * 100001

def path(x):
    arr = []
    temp = x
    for _ in range(distance[x]+1):
        arr.append(temp)
        temp = check[temp]
    print(' '.join(map(str, arr[::-1])))

def bfs():
    q = deque()
    q.append(n)

    while q:
        now = q.popleft()
        if now == k:
            print(distance[now])
            path(now)
            return now
        
        for next in (now-1, now+1, now*2):
            if next<0 or next>100000:
                continue

            if distance[next] == 0:
                q.append(next)
                distance[next] = distance[now] + 1
                check[next] = now

bfs()
