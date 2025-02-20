from collections import deque

n = int(input())
graph = [list(map(int,input())) for _ in range(n)]
visited = [[False]*n for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(start):
    queue = deque()
    queue.append(start)
    visited[start[0]][start[1]] = True
    count = 1

    while queue:
        x, y = queue.popleft()

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if 0 <= nx < n and 0 <= ny < n:
                if visited[nx][ny] == False and graph[nx][ny] == 1:
                    visited[nx][ny] = True
                    count += 1
                    queue.append((nx, ny))
    
    return count

answer = []
for i in range(n):
    for j in range(n):
        if graph[i][j] == 1 and visited[i][j] == False:
            houses = bfs((i, j))
            answer.append(houses)

answer.sort()
print(len(answer))
for i in range(len(answer)):
    print(answer[i])

