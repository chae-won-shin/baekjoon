import heapq
import sys
input = sys.stdin.readline
INF = 1e9

n = int(input())
graph = [[] for _ in range(n+1)]
points = [INF] * (n+1)

while True:
    p1, p2 = map(int, input().split())
    
    if p1 == -1 and p2 == -1:
        break
    
    graph[p1].append(p2)
    graph[p2].append(p1)

def dijkstra(start, distance):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue

        for i in graph[now]:
            if dist + 1 < distance[i]:
                distance[i] = dist + 1
                heapq.heappush(q, (dist+1, i))

for i in range(1, n+1):
    distance = [INF] * (n+1)
    dijkstra(i, distance)
    distance[0] = -1
    points[i] = max(distance)

min_point = min(points)
candidates = []
for i in range(1, n+1):
    if points[i] == min_point:
        candidates.append(i)

print(min_point, len(candidates))
print(' '.join(str(c) for c in candidates))