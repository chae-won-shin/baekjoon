import sys
input = sys.stdin.readline
INF = 1e9

n = int(input())
dist = [[INF] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    dist[i][i] = 0

while True:
    a, b = map(int, input().split())
    if a == -1 and b == -1:
        break
    dist[a][b] = 1
    dist[b][a] = 1

for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

points = [0] * (n+1)
min_point = INF

for i in range(1, n+1):
    points[i] = max(dist[i][1:])
    min_point = min(min_point, points[i])

candidates = [i for i in range(1, n+1) if points[i] == min_point]
print(min_point, len(candidates))
print(' '.join(map(str, candidates)))
