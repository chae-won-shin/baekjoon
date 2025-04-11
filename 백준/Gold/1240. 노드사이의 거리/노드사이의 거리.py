n, m = map(int, input().split())
tree = [[0 if i == j else None for j in range(n+1)] for i in range(n+1)]
answer = []

for _ in range(n-1):
    u, v, dist = map(int, input().split())
    tree[u][v] = dist
    tree[v][u] = dist

def dfs(cur, end, dist):
    if cur == end:
        answer.append(dist)
        return
    
    for i in range(1, n+1):
        if cur != i and not visited[i] and tree[cur][i] != None:
            visited[i] = True
            dfs(i, end, dist + tree[cur][i])
            visited[i] = False

for _ in range(m):
    start, end = map(int, input().split())
    visited = [False] * (n+1)
    visited[start] = True
    dfs(start, end, 0)

for ans in answer:
    print(ans)
