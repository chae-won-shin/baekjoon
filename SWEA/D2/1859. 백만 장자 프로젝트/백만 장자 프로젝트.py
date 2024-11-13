T = int(input())

for t in range(T):
    N = int(input())
    prices = list(map(int, input().split()))
    max_price = 0
    profit = 0

    for i in range(N-1, -1, -1):
        if max_price < prices[i]:
            max_price = prices[i]

        else:
            profit += (max_price - prices[i])
    
    print(f'#{t+1} {profit}')
