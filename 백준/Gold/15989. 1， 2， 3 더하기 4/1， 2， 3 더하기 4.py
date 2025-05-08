t = int(input())

arr = []
for _ in range(t):
    arr.append(int(input()))

limit = max(arr)
dp = [1] * (limit+1)

for i in range(2, limit+1):
    dp[i] += dp[i-2]

for i in range(3, limit+1):
    dp[i] += dp[i-3]

for i in arr:
    print(dp[i])
