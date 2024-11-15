T = int(input())

for t in range(1, T+1):
    N, M = map(int, input().split())
    graph = [list(map(int, input().split())) for _ in range(N)]
    prefix = [[0]*(N+1) for _ in range(N+1)]

    max_result = 0

    for i in range(1, N+1):
        for j in range(1, N+1):
            prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + graph[i-1][j-1]

    for i in range(M, N+1):
        for j in range(M, N+1):
            result = prefix[i][j] - prefix[i-M][j] - prefix[i][j-M] + prefix[i-M][j-M]
            max_result = max(max_result, result)

    print(f'#{t} {max_result}')