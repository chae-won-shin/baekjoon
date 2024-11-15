def dfs(idx, cur_sum,length):
    global count

    if cur_sum == S and length > 0:
        count += 1

    for i in range(idx, N):
        dfs(i+1, cur_sum + arr[i], length+1)

N, S = map(int, input().split())
arr = list(map(int, input().split()))

count = 0

dfs(0,0,0)

print(count)
