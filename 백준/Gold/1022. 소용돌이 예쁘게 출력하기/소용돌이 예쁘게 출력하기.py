from collections import deque

r1, c1, r2, c2 = map(int, input().split())
arr = []

for i in range(r1, r2+1):
    num = []
    arr += [num]

    for j in range(c1, c2+1):
        k = 2 * max(-i, i, -j, j)
        num += [1 + k*k + (-1)**(i < j) * (i + j + k)]

for z in arr:
    print(*[f'%{len(str(max(arr[0] + num)))}d'%i for i in z])
