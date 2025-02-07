import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
psum = [0]*(n)

for i in range(1, n):
    if arr[i-1] > arr[i]:
        psum[i] = psum[i-1] + 1
    else:
        psum[i] = psum[i-1]

q = int(input())
for i in range(q):
    x, y = map(int, input().split())
    print(psum[y - 1]-psum[x - 1])
    
