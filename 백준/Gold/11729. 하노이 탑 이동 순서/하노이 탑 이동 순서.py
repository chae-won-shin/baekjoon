n = int(input())
answer = []

def hanoi(n, start, mid, end):
    if n == 1:
        answer.append(f'{start} {end}')
        return
    
    hanoi(n-1, start, end, mid)
    answer.append(f'{start} {end}')
    hanoi(n-1, mid, start, end)

hanoi(n, 1, 2, 3)
print(len(answer))
for a in answer:
    print(a)