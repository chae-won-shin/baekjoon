from collections import deque

M, N, H = map(int, input().split()) 
tomatoes = []
for _ in range(H):
    floor = [list(map(int, input().split())) for _ in range(N)]
    tomatoes.append(floor)

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
dh = [-1, 1]
not_ripe = 0
total = 0

queue = deque()
for i in range(H):
    for j in range(N):
        for k in range(M):
            total += 1
            if tomatoes[i][j][k] == 1:
                queue.append((i, j, k, 0))
            if tomatoes[i][j][k] == -1:
                not_ripe -= 1           

answer = 0
while queue:
    h, x, y, days = queue.popleft()

    if tomatoes[h][x][y] == 1:
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            if 0 <= nx < N and 0 <= ny < M and tomatoes[h][nx][ny] == 0:
                tomatoes[h][nx][ny] = 1
                queue.append((h, nx, ny, days+1))

        for step in dh:
            nh = h + step
            if 0 <= nh < H and tomatoes[nh][x][y] == 0:
                tomatoes[nh][x][y] = 1
                queue.append((nh, x, y, days+1))
    
    answer = days

result = sum(sum(sum(row) for row in layer) for layer in tomatoes)
if total + (not_ripe * 2) == result:
    print(answer)
else:
    print(-1)
