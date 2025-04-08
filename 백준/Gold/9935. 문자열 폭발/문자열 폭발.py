string = list(input())
bomb = list(input())

b_len = len(bomb)
b_start = bomb[0]
r_bomb = bomb[::-1]

stack = []
for i in range(len(string)-1, -1, -1):
    stack.append(string[i])

    if len(stack) >= b_len and string[i] == b_start:
        if stack[-b_len:] == r_bomb:
            for _ in range(b_len):
                stack.pop()

if len(stack) == 0:
    print('FRULA')
else:
    print(''.join(stack[::-1]))
