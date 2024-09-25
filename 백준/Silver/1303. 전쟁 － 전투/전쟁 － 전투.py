import sys
from collections import deque

input = sys.stdin.readline
col,row = map(int, input().split())

graph = []
for _ in range(row):
    graph.append(list(input()))

dx = [-1,1,0,0]
dy = [0,0,-1,1]
power = [0,0]

def bfs(x,y,a):
    queue = deque()
    queue.append((x,y))
    graph[x][y] = -1
    cnt = 1
    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx,ny = dx[i]+x, dy[i]+y
            if nx<0 or nx>=row or ny<0 or ny>=col:
                continue
            if graph[nx][ny] == a:
                graph[nx][ny] = -1
                queue.append((nx,ny))
                cnt += 1
    return cnt*cnt

for i in range(row):
    for j in range(col):
        if graph[i][j] == 'W':
            power[0] += bfs(i,j,'W')
        if graph[i][j] == 'B':
            power[1] += bfs(i,j,'B')

print(" ".join(map(str, power)))