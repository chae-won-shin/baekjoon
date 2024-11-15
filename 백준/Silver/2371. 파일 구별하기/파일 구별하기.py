n = int(input())

ans = 0

for _ in range(n):
    ans = max(ans, len(input().split()) -1)

print(ans)