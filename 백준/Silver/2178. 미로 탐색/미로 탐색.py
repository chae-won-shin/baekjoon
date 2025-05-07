from collections import deque

n, m = map(int, input().split())
maze = [list(map(int, input())) for _ in range(n)]
visited = [[False] * m for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

queue = deque()
queue.append((0, 0, 1))

while queue:
    x, y, count = queue.popleft()
    
    if x == n-1 and y == m-1:
        print(count)
        break

    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]

        if 0 <= nx < n and 0 <= ny < m :
            if maze[nx][ny] == 1 and not visited[nx][ny]:
                queue.append((nx, ny, count+1))
                visited[nx][ny] = True
