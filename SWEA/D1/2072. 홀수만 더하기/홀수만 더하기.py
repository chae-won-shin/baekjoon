T = int(input())
res = 0
ans = []

for i in range(T):
    arr = list(map(int, input().split()))
    res = sum(e for e in arr if e % 2 == 1)
    ans.append(f"#{i+1} {res}") 

result = "\n".join(ans)
print(result)
