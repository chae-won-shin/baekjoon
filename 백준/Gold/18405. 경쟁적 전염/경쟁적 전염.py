from collections import deque

n, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
s, x, y = map(int, input().split())

dx = [-1, 1, 0 ,0]
dy = [0, 0, -1 ,1]

virus = []
for i in range(n):
    for j in range(n):
        if arr[i][j] != 0:
            virus.append((arr[i][j], i, j, 0))
virus.sort(key = lambda x: x[0])
queue = deque(virus)

def bfs():
    while queue:
        num, cx, cy, time = queue.popleft()
        if time == s:
            return
        
        for d in range(4):
            nx = cx + dx[d]
            ny = cy + dy[d]

            if 0 <= nx < n and 0 <= ny < n:
                if arr[nx][ny] == 0:
                    arr[nx][ny] = num
                    queue.append((num, nx, ny, time + 1))

bfs()
print(arr[x-1][y-1])