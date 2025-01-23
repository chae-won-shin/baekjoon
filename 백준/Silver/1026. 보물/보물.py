n = int(input())
a = list(map(int, input().split()))
a.sort()
b = list(map(int, input().split()))
b.sort(reverse=True)

S = 0
for i in range(n):
    S += (a[i]*b[i])
print(S)