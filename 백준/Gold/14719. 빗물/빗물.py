h, w = map(int, input().split())
arr = list(map(int, input().split()))

world = [[0]*w for _ in range(h)]
for idx, height in enumerate(arr):
    for i in range(height):
        world[h-i-1][idx] = 1

temp = 0
count = 0
for row in world:
    for i, e in enumerate(row):
        if e == 0:
            if i-1 >= 0 and (row[i-1] == 1 or temp > 0):
                    temp += 1
        if e == 1:
            count += temp
            temp = 0    
    temp = 0

print(count)
