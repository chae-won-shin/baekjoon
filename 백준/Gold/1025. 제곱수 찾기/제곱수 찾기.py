import math

n, m = map(int, input().split())
arr = [list(map(int, input())) for _ in range(n)]
ans = -1

def isSquare(num):
    if num < 0:
        return False
    root = int(math.sqrt(num))
    return root * root == num

for i in range(n):
    for j in range(m):
        for x in range(-n, n):
            for y in range(-m, m):
                a, b = i, j
                cur = 0
                while 0 <= a < n and 0 <= b < m:
                    cur = cur * 10 + arr[a][b]
                    if x == 0 and y == 0: 
                        break
                    if isSquare(cur):
                        ans = max(cur, ans)
                    a += x
                    b += y

print(ans)
