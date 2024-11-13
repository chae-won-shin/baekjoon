T = int(input())

for t in range(T):
    N = int(input())
    rows, cols = N, N

    snail = [[-1 for _ in range(cols)] for _ in range(rows)]

    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    num = 1
    x, y = 0, 0
    dir = 0
    snail[x][y] = num

    while(True):
        nx = x + dx[dir]
        ny = y + dy[dir]

        if nx<0 or ny<0 or nx>=N or ny>=N or snail[nx][ny] != -1:
            dir += 1
            if dir == 4:
                dir = 0
        else:
            x = nx
            y = ny
            num += 1
            snail[x][y] = num

        if num == N*N:
            break

    str_rows = [' '.join(map(str, row)) for row in snail]
    print(f'#{t+1}')
    print("\n".join(str_rows))
