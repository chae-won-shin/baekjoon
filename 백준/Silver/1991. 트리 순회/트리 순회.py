n = int(input())
tree = {}

for _ in range(n):
    parent, left, right = input().split()
    tree[parent] = (left, right)

def preorder(node):
    if node == ".":
        return
    
    left, right = tree[node]
    print(node, end = "")
    preorder(left)
    preorder(right)

def inorder(node):
    if node == ".":
        return
    
    left, right = tree[node]
    inorder(left)
    print(node, end = "")
    inorder(right)

def postorder(node):
    if node == ".":
        return
    
    left, right = tree[node]
    postorder(left)
    postorder(right)
    print(node, end = "")

preorder('A')
print()
inorder('A')
print()
postorder('A')
