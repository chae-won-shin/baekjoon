from collections import deque

wheels = list(deque(map(int, input())) for _ in range(4))
rotate_count = int(input())
rotates = [list(map(int, input().split())) for _ in range(rotate_count)]

for wheel, direction in rotates:
    wheel -= 1
    directions = [0] * 4
    directions[wheel] = direction

    for i in range(wheel-1, -1, -1):
        if wheels[i][2] != wheels[i+1][6]:
            directions[i] = - directions[i+1]
        else:
            break
    
    for i in range(wheel+1, 4):
        if wheels[i-1][2] != wheels[i][6]:
            directions[i] = - directions[i-1]
        else:
            break

    for i in range(4):
        if directions[i] != 0:
            wheels[i].rotate(directions[i])

point = 0
for i in range(4):
    if wheels[i][0] == 1:
        point += (2**i)

print(point)