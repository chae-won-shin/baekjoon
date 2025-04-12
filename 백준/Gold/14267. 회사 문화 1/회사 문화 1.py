n, m = map(int, input().split())
boss = [0] + list(map(int, input().split()))
great = [0] * (n+1)

for _ in range(m):
    i, w = map(int, input().split())
    great[i] += w

for i in range(2, n+1):
    great[i] += great[boss[i]]

print(*great[1:])
