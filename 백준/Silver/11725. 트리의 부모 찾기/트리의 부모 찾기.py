import sys
sys.setrecursionlimit(10**6)

n = int(sys.stdin.readline())
tree = [[] for _ in range(n+1)]
parent = [0] * (n+1)

for _ in range(n-1):
    u, v = map(int, sys.stdin.readline().split())
    tree[u].append(v)
    tree[v].append(u)

def find_parent(cur, par):
    for node in tree[cur]:
        if node != par:
            parent[node] = cur
            find_parent(node, cur)

find_parent(1, -1)

for i in range(2, n+1):
    print(parent[i])
