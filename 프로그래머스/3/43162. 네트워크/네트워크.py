def find(parent, x):
    if parent[x] != x:
        return find(parent, parent[x])
    return x

def union(parent, a, b):
    a = find(parent, a)
    b = find(parent, b)
    
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

def solution(n, computers):
    parent = list(range(n))
    
    for i in range(n):
        for j in range(n):
            if computers[i][j] == 1 and i!=j:
                union(parent, i, j)
    
    answer = set(find(parent, i) for i in range(n))
    
    return len(answer)
            

