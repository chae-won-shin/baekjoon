n, m = map(int, input().split())
hear = set()
both = set()

for i in range(n):
    hear.add(input())

for i in range(m):
    temp = input()
    if temp in hear:
        both.add(temp)

result = sorted(both)
print(len(result))
for e in result:
    print(e)
