n = int(input())
weight = [0] + list(map(int, input().split()))
graph = [[] for _ in range(n+1)]

for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

dp = [[0, 0] for _ in range(n+1)]
visited = [False] * (n+1)

def dfs(node):
    if visited[node]:
        return max(dp[node][0], dp[node][1])

    visited[node] = True
    dp[node][1] = weight[node]

    for child in graph[node]:
        if not visited[child]:
            dfs(child)
            dp[node][0] += max(dp[child][1], dp[child][0])
            dp[node][1] += dp[child][0]

    return max(dp[node][0], dp[node][1])

result = dfs(1)

visited = [False] * (n+1)
selected = [False] * (n+1)

def trace_path(node, parent_selected):
    if visited[node]:
        return
    
    visited[node] = True
    if parent_selected:
        selected[node] = False
        for child in graph[node]:
            if not visited[child]:
                trace_path(child, False)

    else:
        if dp[node][1] > dp[node][0]:
            selected[node] = True
            for child in graph[node]:
                if not visited[child]:
                    trace_path(child, True)
        else:
            selected[node] = False
            for child in graph[node]:
                if not visited[child]:
                    trace_path(child, False)

trace_path(1, 0)

print(result)
for i in range(n+1):
    if selected[i]:
        print(i, end=' ')
