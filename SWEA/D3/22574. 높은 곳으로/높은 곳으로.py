T = int(input())

for _ in range(T):
    N, P = map(int, input().split())
    cur = 0
    max_floor = 10**9 + 1

    for i in range(1, N+1):
        cur += i
        if cur == P:
            cur -= 1

    print(cur)