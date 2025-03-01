import sys
input = sys.stdin.readline

n = int(input())
fruits = list(map(int, input().split()))

ans = 0
left = 0
count = {}
kind = 0

for right in range(n):
    if fruits[right] in count:
        count[fruits[right]] += 1
    else:
        count[fruits[right]] = 1
        kind += 1

    while kind > 2:
        count[fruits[left]] -= 1
        if count[fruits[left]] == 0:
            del count[fruits[left]]
            kind -= 1
        left += 1

    ans = max(ans, right - left + 1)

print(ans)