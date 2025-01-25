import sys

m = int(sys.stdin.readline())
S = set()

for _ in range(m):
    input_value = sys.stdin.readline().rstrip().split()
    
    if len(input_value) == 1:
        if input_value[0] == 'all':
            S = set([i for i in range(1, 21)])
        else:
            S.clear()

    else:
        comm, x = input_value[0], int(input_value[1])

        if comm == 'add':
            S.add(x)
        if comm == 'remove':
            S.discard(x)
        if comm == 'check':
            print(1 if x in S else 0)
        if comm == 'toggle':
            if x in S:
                S.discard(x)
            else:
                S.add(x)  
