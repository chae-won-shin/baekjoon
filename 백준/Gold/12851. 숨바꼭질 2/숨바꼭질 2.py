import sys
import heapq

input = sys.stdin.readline
INF = int(1e9)

n, k = map(int, input().split())
distance = [INF] * 100001
count = [0] * 100001

def dijkstra(start, end):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    count[start] = 1

    while q:
        dist, now = heapq.heappop(q)

        if distance[now] < dist:
            continue

        for next in (now-1, now+1, now*2):
            if next<0 or next>100000:
                continue

            cost = dist+1
            if cost < distance[next]:
                distance[next] = cost
                count[next] = count[now] 
                heapq.heappush(q, (cost, next))
            elif cost == distance[next]:
                count[next] += count[now]

dijkstra(n, k)
print(distance[k], count[k])
