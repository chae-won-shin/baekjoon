r, c = map(int, input().split())
board = [list(input()) for _ in range(r)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
alphabets = set(board[0][0])
answer = 1

def dfs(x, y, dist):
    global answer
    answer = max(answer, dist)

    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]

        if 0 <= nx < r and 0 <= ny < c and board[nx][ny] not in alphabets:
            alphabets.add(board[nx][ny])
            dfs(nx, ny, dist+1)
            alphabets.remove(board[nx][ny])

dfs(0, 0, 1)
print(answer)   
