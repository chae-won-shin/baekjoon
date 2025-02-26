n, m = map(int, input().split())
arr1 = [list(map(int, input())) for _ in range(n)]
arr2 = [list(map(int, input())) for _ in range(n)]

def converse(row, col):
    for i in range(row, row+3):
        for j in range(col, col+3):
            arr1[i][j] ^= 1

count = 0
for i in range(n-2):
    for j in range(m-2):
        if arr1[i][j] != arr2[i][j]:
            converse(i, j)
            count += 1

print(count if arr1 == arr2 else -1)