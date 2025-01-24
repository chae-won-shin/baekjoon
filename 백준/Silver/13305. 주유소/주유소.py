n = int(input())
roads = list(map(int, input().split()))
prices = list(map(int, input().split()))
prices = prices[:-1]

min_price = 999
result = 0
for i in range(n-1):
    min_price = min(min_price, prices[i])
    result += min_price * roads[i]

print(result)
