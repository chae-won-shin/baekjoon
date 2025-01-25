import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)

n = int(input())
m = int(input())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

def dijkstra(start, end):
    distance = [INF] * (n+1)
    q = []
    heapq.heappush(q, (0, start, [start]))
    distance[start] = 0

    while q:
        dist, now, stops = heapq.heappop(q)

        if dist > distance[now]:
            continue

        if now == end:
            return distance[end], stops

        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0], stops + [i[0]]))

depart, dest = map(int, input().split())

dist, stops = dijkstra(depart, dest)
print(dist)
print(len(stops))
print(*stops)
