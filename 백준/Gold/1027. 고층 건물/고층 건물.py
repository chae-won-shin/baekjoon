n = int(input())
buildings = list(map(int, input().split()))

def make_slope(x1, y1, x2, y2):
    return (y2 - y1) / (x2 - x1)

def search(start):
    count = 0

    # 왼쪽
    min_slope = float('inf')
    for i in range(start-1, -1, -1):
        slope = make_slope(start, buildings[start], i, buildings[i])

        if slope < min_slope:
            min_slope = slope
            count += 1

    # 오른쪽
    max_slope = float('-inf')
    for i in range(start+1, n):
        slope = make_slope(start, buildings[start], i, buildings[i])

        if slope > max_slope:
            max_slope = slope
            count += 1

    return count

res = -1
for i in range(n):
    res = max(res, search(i))

print(res)
