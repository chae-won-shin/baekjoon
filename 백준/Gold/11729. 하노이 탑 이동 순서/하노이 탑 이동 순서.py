n = int(input())
answer = []

def hanoi(n, start, end, mid):
    if n == 1:
        answer.append(f'{start} {end}')
        return
    
    hanoi(n-1, start, mid, end)
    answer.append(f'{start} {end}')
    hanoi(n-1, mid, end, start)

hanoi(n, 1, 3, 2)
print(len(answer))
for a in answer:
    print(a)