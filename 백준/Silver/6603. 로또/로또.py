from itertools import combinations

while True:
    arr = list(map(int, input().split()))
    
    if arr[0] == 0:
        break

    arr = arr[1:]
    answer = combinations(arr, 6)

    for ans in answer:
        for a in ans:
            print(a, end = ' ')
        print()
    print()
