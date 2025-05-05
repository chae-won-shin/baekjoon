n, m = map(int, input().split())
board = [list(map(int, input())) for _ in range(n)]

def flip(x, y):
    for i in range(x+1):
        for j in range(y+1):
            board[i][j] ^= 1

count = 0
for i in range(n-1, -1, -1):
    for j in range(m-1, -1, -1):
        if board[i][j] == 1:
            count += 1
            flip(i, j)

print(count)
