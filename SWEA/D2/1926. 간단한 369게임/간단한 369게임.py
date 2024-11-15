N = int(input())
game = []

for n in range(1, N+1):
    s = str(n)
    clap = ''
    if '3' in s or '6' in s or '9' in s:
       temp = len(list(filter(lambda x: x in '369', s))) 
       clap += '-' * temp
       game.append(clap)
       clap = ''
    else: game.append(s)

print(' '.join(game))
