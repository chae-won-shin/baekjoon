n = int(input())
arr = list(map(int, input().split()))
erase = int(input())

def dfs(num, arr):
    arr[num] = -2
    for i in range(n):
        if arr[i] == num:
            dfs(i, arr)

dfs(erase, arr)

cnt = 0
for i in range(n):
    if arr[i] != -2 and i not in arr:
        cnt += 1

print(cnt)