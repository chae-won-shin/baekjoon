n, m = map(int, input().split())
numbers = list(map(int, input().split()))
arr = [tuple(map(int, input().split())) for _ in range(m)]

dp = [0] * (n+1)
for i in range(1, n+1):
    dp[i] = dp[i-1] + numbers[i-1]

for start, end in arr:
    print(dp[end] - dp[start-1])
