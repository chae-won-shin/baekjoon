n = int(input())
ropes = []
for _ in range(n):
    ropes.append(int(input()))
ropes.sort(reverse=True)

total = 0
for index, value in enumerate(ropes):
    temp = value * (index+1)
    total = max(total, temp)

print(total)
