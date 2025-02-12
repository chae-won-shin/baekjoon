from collections import deque

m, n = map(int, input().split())
tomatoes = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

queue = deque()
days = 0

for i in range(n):
    for j in range(m):
        if tomatoes[i][j] == 1:
            queue.append([i, j])

def bfs():
    while queue:
        x, y = queue.popleft()

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if (0<=nx<n and 0<=ny<m and tomatoes[nx][ny] == 0):
                tomatoes[nx][ny] = tomatoes[x][y] + 1
                queue.append([nx, ny])

bfs()

for row in tomatoes:
    for tomato in row:
        if tomato == 0:
            print(-1)
            exit(0)

    days = max(days, max(row))

print(days-1)
