for t in range(1, 11): 
    N = int(input())
    land = list(map(int, input().split()))

    for _ in range(N):
        highest_idx = land.index(max(land))
        land[highest_idx] -= 1

        lowest_idx = land.index(min(land))
        land[lowest_idx] += 1

        res = max(land) - min(land)
        if res <= 1:
            break

    print(f'#{t} {res}')