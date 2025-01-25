import sys
import heapq

input = sys.stdin.readline
INF = int(1e9)

n, k = map(int, input().split())
distance = [INF] * 100001

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue

        for i in (now-1, now+1, now*2):
            if i<0 or i>100000:
                continue

            cost = dist+1
            if cost < distance[i]:
                distance[i] = cost
                heapq.heappush(q, (cost, i))

dijkstra(n)
print(distance[k])
