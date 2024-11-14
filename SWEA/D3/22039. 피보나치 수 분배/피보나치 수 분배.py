T = int(input())

for _ in range(T):
    N = int(input())

    dp = [-1 for _ in range(101)]
    dp[0], dp[1], dp[2], dp[3] = 0, 0, 'BA', 'BBA'
    for i in range(4, N+1):
        if dp[i-3] == 0:
            dp[i] = 0
        else :
            dp[i] = dp[i-3]+'BBA'

    if dp[N] == 0:
        print('impossible')
    else: 
        print(dp[N])
