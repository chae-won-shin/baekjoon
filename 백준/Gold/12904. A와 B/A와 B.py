s = input()
t = input()

while True:
    if len(t) == len(s):
        break

    if t[len(t)-1] == 'A':
        t = t[:len(t)-1]
    elif t[len(t)-1] == 'B':
        t = t[:len(t)-1]
        t = t[::-1]
    
if s == t:
    print(1)
else:
    print(0)
