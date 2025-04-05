k = int(input())
answer = []

chocolate = 1
while chocolate < k:
    chocolate *= 2

remain, count = k, 0
size = chocolate

while remain:
    if size <= remain:
        remain -= size
    else:
        size //= 2
        count += 1

print(chocolate, count)