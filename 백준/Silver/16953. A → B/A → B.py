a, b = map(int, input().split())
cnt = 1

while a != b:
    temp = b
    cnt += 1

    if b % 10 == 1:
        b //= 10
    elif b%2 == 0:
        b //= 2

    if temp == b:
        print(-1)
        break

else: print(cnt)