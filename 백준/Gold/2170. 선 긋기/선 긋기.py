import heapq

n = int(input())
lines = [list(map(int, input().split())) for _ in range(n)]
lines.sort(key = lambda x: (x[0], x[1]))
total = 0

heap = [lines[0]]
for i in range(1, n):
    if lines[i][0] > heap[0][1]:
        start, end = heapq.heappop(heap)
        total += (end - start)
        heapq.heappush(heap, lines[i])
    elif lines[i][0] >= heap[0][0] and lines[i][1] > heap[0][1]:
        heap[0][1] = lines[i][1]

start, end = heapq.heappop(heap)
total += (end - start)
print(total)
