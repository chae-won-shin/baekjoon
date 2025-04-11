import sys
sys.setrecursionlimit(10**6)

n = int(sys.stdin.readline())
tree = {}

for _ in range(n):
    parent, left, right = map(int, sys.stdin.readline().split())
    tree[parent] = (left ,right)

def inorder(node):
    global count1
    visited[node] = True
    
    left, right = tree[node]
    if not visited[left] and left != -1:
        inorder(left)
        count1 += 1
    if not visited[right] and right != -1:
        inorder(right)
        count1 += 1

def right_order(node):
    global count2
    visited[node] = True
    
    _, right = tree[node]
    if not visited[right] and right != -1:
        right_order(right)
        count2 += 1

visited = [False] * (n+1)
count1 = 0
inorder(1)

visited = [False] * (n+1)
count2 = 0
right_order(1)

print(count1 * 2 - count2)
