T = int(input())

for _ in range(T):
    n, m = map(int, input().split())
    dp = [[0] * (m+1) for _ in range (n+1)]

    for i in range(1, m+1):
        dp[1][i] = i

    for i in range(1, n+1):
        dp[i][i] = 1

    for i in range(2, n+1):
        for j in range(i, m+1):
            dp[i][j] = dp[i-1][j-1] + dp[i][j-1]

    print(dp[n][m])