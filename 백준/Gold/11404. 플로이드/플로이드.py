import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
INF = int(1e9)

dp = [[INF] * (n+1) for _ in range(n+1)]

for a in range(1, n+1):
    for b in range(1, n+1):
        if a == b:
            dp[a][b] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    dp[a][b] = min(c, dp[a][b])

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            dp[a][b] = min(dp[a][b], dp[a][k] + dp[k][b])

for a in range(1, n+1):
    for b in range(1, n+1):
        if dp[a][b] == INF:
            print(0, end = " ")
        else: print(dp[a][b], end = " ")
    print()
