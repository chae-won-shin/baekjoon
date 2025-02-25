from collections import deque

n, r1, c1, r2, c2 = map(int, input().split())

length = 2*n - 1
for i in range(r1, r2+1):
    for j in range(c1, c2+1):
        dist = abs(n-1-(i%length)) + abs(n-1-(j%length))
        if dist > n-1:
            print('.', end = '')
        else:
            print(chr(ord('a') + (dist % 26)), end = '')
    print()