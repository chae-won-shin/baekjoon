import heapq
INF = int(1e9)

n, k = map(int, input().split())
distance = [INF] * 100001

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        if dist > distance[now]:
            continue

        for i in (now-1, now+1, now*2):
            if i < 0 or i > 100000:
                continue

            cost = dist
            if i != now * 2:
                cost = dist + 1

            if cost < distance[i]:
                distance[i] = cost
                heapq.heappush(q, (cost, i))

dijkstra(n)

print(distance[k])
