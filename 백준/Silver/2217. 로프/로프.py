n = int(input())
ropes = []
for _ in range(n):
    ropes.append(int(input()))
ropes.sort(reverse=True)

def get_maximum(arr):
    total = 0

    for index, value in enumerate(arr):
        temp = value * (index+1)
        total = max(total, temp)

    return total

print(get_maximum(ropes))