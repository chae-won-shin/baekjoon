import sys

start, end = map(int, sys.stdin.readline().split())
limit = 100000
d = [True] * (limit+1)
d[0] = d[1] = False

for i in range(2, int(limit ** 0.5) + 1):
    if d[i]:
        for j in range(i*i, limit+1, i):
            d[j] = False

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
