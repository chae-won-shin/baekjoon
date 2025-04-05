n = int(input())
arr = []
for i in range(n):
    arr.append(int(input()))

arr = sorted(arr)
answer = 0
for idx, element in enumerate(arr):
    answer += abs(element - (idx+1))

print(answer)
