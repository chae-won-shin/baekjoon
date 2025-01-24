n = int(input())

arr = []
dp = [[-1]*n for _ in range(n)]

for i in range(n):
    row = list(map(int, input().split()))
    arr.append(row)

dp[0][0] = arr[0][0]
for i in range(1, n):
    for j in range(i+1):
        dp[i][j] = max(dp[i-1][j] + arr[i][j], dp[i-1][j-1] + arr[i][j])

print(max(dp[n-1]))
