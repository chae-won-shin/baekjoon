import sys
sys.setrecursionlimit(10**6)

n = int(sys.stdin.readline())
tree = [[] for _ in range(n+1)]

for _ in range(n-1):
    u, v, weight = map(int, sys.stdin.readline().split())
    tree[u].append((v, weight))
    tree[v].append((u, weight))

def find(start, now):
    for node, weight in tree[start]:
        if visited[node] == -1:
            visited[node] = weight + now
            find(node, visited[node])

visited = [-1] * (n+1)
visited[1] = 0
find(1, 0)

start = visited.index(max(visited))
visited = [-1] * (n+1)
visited[start] = 0
find(start, 0)

print(max(visited))
