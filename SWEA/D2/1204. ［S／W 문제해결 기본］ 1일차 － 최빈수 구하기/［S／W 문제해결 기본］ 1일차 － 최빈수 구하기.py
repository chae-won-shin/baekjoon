T = int(input())

for _ in range(T):
    counts = [0 for _ in range(101)]

    t = int(input())
    points = list(map(int, input().split()))

    for p in points:
        counts[p] += 1

    max_point = max(counts)
    answer = -1
    max_indices = [i for i, count in enumerate(counts) if count == max_point]
    if len(max_indices) > 1:
        answer = max(max_indices)
    else: answer = max_indices[0]
    print(f'#{t} {answer}')
