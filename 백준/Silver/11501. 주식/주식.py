T = int(input())

for _ in range(T):
    N = int(input())
    prices = list(map(int, input().split()))
    max_price = -1
    cost = 0

    for i in range(N-1, -1, -1):
        if (max_price < prices[i]):
            max_price = prices[i]
        else:
            cost += (max_price - prices[i])

    print(cost)