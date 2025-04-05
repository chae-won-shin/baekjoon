from collections import deque

while True:
    N, R, C = map(int, input().split())

    if N == 0 and R == 0 and C == 0:
        break

    maze = []
    visited = [[[False for _ in range(C)] for _ in range(R)] for _ in range(N)]
    
    for _ in range(N):
        floor = []
        while True:
            line = input()
            if line.strip() == '':
                continue
            floor.append(list(line))
            if len(floor) == R:
                break
        maze.append(floor)
    _ = input()
    
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    dz = [1, -1]

    start = None
    for i in range(N):
        for j in range(R):
            for k in range(C):
                if maze[i][j][k] == 'S':
                    start = (i, j, k)
                    break

    queue = deque()
    queue.append((start[0], start[1], start[2], 0))
    visited[start[0]][start[1]][start[2]] = True
    escaped = False

    while queue:
        n, r, c, dist = queue.popleft()

        if maze[n][r][c] == 'E':
                print(f'Escaped in {dist} minute(s).')
                escaped = True
                break
        
        for d in range(4):
            nr = r + dx[d]
            nc = c + dy[d]

            if 0 <= nr < R and 0 <= nc < C:
                if not visited[n][nr][nc] and maze[n][nr][nc] in ('.', 'E'):
                    visited[n][nr][nc] = True
                    queue.append((n, nr, nc, dist+1))

        for dz_step in dz:
            nz = n + dz_step
            if 0 <= nz < N:
                if not visited[nz][r][c] and maze[nz][r][c] in ('.', 'E'):
                    visited[nz][r][c] = True
                    queue.append((nz, r, c, dist+1))
                
    if not escaped:
        print('Trapped!')      
    