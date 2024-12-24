n, m = map(int, input().split())
balls = [i for i in range(n+1)]

for _ in range(m):
    i, j = map(int, input().split())
    balls[i], balls[j] = balls[j], balls[i]

print(' '.join(map(str, balls[1:])))
