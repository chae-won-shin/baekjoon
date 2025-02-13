n, m = map(int, input().split())
square = [list(map(int, input())) for _ in range(n)]

length = min(n, m)
ans = []
i, j = 0, 0

while length > 0:
    if square[i][j] == square[i+length-1][j] == square[i][j+length-1] == square[i+length-1][j+length-1]:
        ans.append(length**2)

    j += 1

    if j+length-1 >= m:
        j = 0
        i += 1
    
    if i+length-1 >= n:
        length -= 1
        i = 0
        j = 0

print(max(ans))
