n = int(input())
t, p = [0] * (n+1), [0] * (n+1)
for i in range(1, n+1):
    t[i], p[i] = map(int, input().split())

dp = [0] * (n+1)

for i in range(1, n+1):
    dp[i] = max(dp[i], dp[i-1])
    fin = i + t[i] - 1
    if fin <= n:
        dp[fin] = max(dp[fin], dp[i-1]+p[i])

print(max(dp))
