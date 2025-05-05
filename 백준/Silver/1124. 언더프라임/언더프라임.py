import sys

start, end = map(int, sys.stdin.readline().split())
d = [True for _ in range(100001)]
d[1] = False

m = int(100000 ** 0.5)
for n in range(2, m+1):
    if d[n]:
        for k in range(n, 100001):
            if n * k > 100000:
                break
            d[n*k] = False

    if n * (n+1) > 100000:
        break

dd = [0 for _ in range(end+1)]

for i in range(1, end+1):
    if d[i]:
        dd[i] = 1

for i in range(2, end+1):
    for j in range(2, end+1):
        if i * j > end:
            break
        if d[j]:
            dd[i*j] = dd[i] +1

count = 0
for i in range(start, end+1):
    if d[dd[i]]:
        count += 1

print(count)
