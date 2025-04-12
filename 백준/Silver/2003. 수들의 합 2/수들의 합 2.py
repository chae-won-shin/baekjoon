n, m = map(int, input().split())
arr = [0] + list(map(int, input().split()))
sub_sum = [0] * (n+1)

for i in range(1, n+1):
    sub_sum[i] = arr[i] + sub_sum[i-1]

count = 0
for i in range(n+1):
    for j in range(i, n+1):
        if sub_sum[j] - sub_sum[i-1] == m:
            count += 1

print(count)
