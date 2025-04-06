n = int(input())
eggs = [list(map(int, input().split())) for _ in range(n)]
ans = 0

def dfs(depth):
    global ans

    if depth == n:
        broken = sum(1 for d, _ in eggs if d <= 0)
        ans = max(ans, broken)
        return
    
    if eggs[depth][0] <= 0:
        dfs(depth + 1)
        return

    hit = False
    for i in range(n):
        if i != depth and eggs[i][0] > 0:
            hit = True
            eggs[depth][0] -= eggs[i][1]
            eggs[i][0] -= eggs[depth][1]

            dfs(depth + 1)

            eggs[depth][0] += eggs[i][1]
            eggs[i][0] += eggs[depth][1]

    if not hit:
        dfs(depth + 1)

dfs(0)
print(ans)
