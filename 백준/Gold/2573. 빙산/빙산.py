from collections import deque
import copy

n, m = map(int, input().split())
initial_graph = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

def melt(graph):
    temp = [[0] * m for _ in range(n)]

    for x in range(n):
        for y in range(m):
            if graph[x][y] > 0:
                count = 0
                for d in range(4):
                    nx = x + dx[d]
                    ny = y + dy[d]
                    
                    if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0:
                        count += 1
                temp[x][y] = max(graph[x][y] - count, 0)

    return temp

def get_count(graph, visited, i, j):
    queue = deque()
    queue.append((i, j))
    visited[i][j] = True

    while queue:
        x, y = queue.popleft()

        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] > 0 and not visited[nx][ny]:
                    visited[nx][ny] = True
                    queue.append((nx, ny))
    
year = 0
temp = copy.deepcopy(initial_graph)

while True:
    visited = [[False] * m for _ in range(n)]
    count = 0

    for i in range(n):
        for j in range(m):
            if temp[i][j] > 0 and not visited[i][j]:
                get_count(temp, visited, i, j)
                count += 1

    if count == 0:
        print(0)
        break

    if count >= 2:
        print(year)
        break

    temp = melt(temp)
    year += 1
