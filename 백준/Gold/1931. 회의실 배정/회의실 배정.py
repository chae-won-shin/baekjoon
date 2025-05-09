n = int(input())
meetings = [list(map(int, input().split())) for _ in range(n)]
meetings.sort(key = lambda x: (x[1], x[0]))

end_point = 0
count = 0

for start, end in meetings:
    if end_point <= start:
        count += 1
        end_point = end

print(count)
