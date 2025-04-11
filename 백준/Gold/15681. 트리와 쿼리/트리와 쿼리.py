import sys
sys.setrecursionlimit(10**6)

n, r, q = map(int, sys.stdin.readline().split())
tree = [[] for _ in range(n+1)]
visited = [-1] * (n+1)

for _ in range(n-1):
    u, v = map(int, input().split())
    tree[u].append(v)
    tree[v].append(u)

def dfs(cur):
    visited[cur] = 1
    for i in tree[cur]:
        if visited[i] == -1:
            visited[cur] += dfs(i)

    return visited[cur]

dfs(r)

for _ in range(q):
    query = int(sys.stdin.readline())
    print(visited[query])
