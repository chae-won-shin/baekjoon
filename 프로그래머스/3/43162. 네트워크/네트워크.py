def dfs(n, computers, visited, start):
    visited[start] = True
    
    for i in range(n):
        if computers[start][i] == 1 and not visited[i]:
            dfs(n, computers, visited, i)
            
def solution(n, computers):
    visited = [False] * n
    count = 0
    
    for i in range(n):
        if not visited[i]:
            dfs(n, computers, visited, i)
            count += 1
            
    return count