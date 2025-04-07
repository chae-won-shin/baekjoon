import itertools
INF = int(1e9)

n, k = map(int, input().split())
pos = [tuple(map(int, input().split())) for _ in range(n)]
combinations = list(itertools.combinations(pos, k))

def get_distance(x1, y1, x2, y2):
    return abs(x1-x2) + abs(y1-y2)

def get_max_distance(comb):
    max_dist = -INF
    for p in pos:
        if p in comb:
            continue
        dist = INF
        for c in comb:
            temp = get_distance(p[0], p[1], c[0], c[1])
            dist = min(dist, temp)
        max_dist = max(max_dist, dist)
    return max_dist

answer = INF
for comb in combinations:
    answer = min(answer, get_max_distance(comb))

print(answer)
