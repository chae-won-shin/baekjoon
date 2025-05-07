from collections import deque

def get_dist(x, y, nx, ny):
    return abs(nx - x) + abs(ny - y)

def bfs():
    if get_dist(sx, sy, rx, ry) <= 1000:
        visited[n] = True
        return

    queue = deque()

    for i in range(len(conv)):
        temp = get_dist(sx, sy, conv[i][0], conv[i][1])
        if temp <= 1000:
            queue.append(conv[i])
            visited[i] = True

    while queue:
        nx, ny = queue.popleft()
        for i in range(len(conv)):
            temp = get_dist(nx, ny, conv[i][0], conv[i][1])
            if temp <= 1000 and not visited[i]:
                queue.append(conv[i])
                visited[i] = True

T = int(input())

for _ in range(T):
    n = int(input())
    visited = [False] * (n+1)
    conv = []

    sx, sy = map(int, input().split())

    for _ in range(n):
        conv.append(list(map(int, input().split())))

    rx, ry = map(int, input().split())
    conv.append([rx, ry])

    bfs()

    if visited[n] == True:
        print('happy')
    else:
        print('sad')
        