c, n = map(int, input().split())
pay = [list(map(int, input().split())) for _ in range(n)]

dp = [1e7 for _ in range(c+100)]
dp[0] = 0

for cost, people in pay:
    for i in range(people, c+100):
        dp[i] = min(dp[i], dp[i - people] + cost)
            
print(min(dp[c:]))
