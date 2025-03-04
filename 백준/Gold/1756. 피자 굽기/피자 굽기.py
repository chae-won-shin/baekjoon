d, n = map(int, input().split())
ovens = list(map(int, input().split()))
pizzas = list(map(int, input().split()))

oven = [ovens[0]]
for i in range(1, len(ovens)):
    if ovens[i] > oven[i-1]: 
        oven.append(oven[i-1]) 
    else:
        oven.append(ovens[i])

pi = 0
i = d - 1

while i >= 0:
    if pizzas[pi] <= oven[i]:
        pi += 1
        if pi == n:
            break
    i -= 1

if pi < n:
    print(0)
else:
    print(i + 1)