l, c = map(int, input().split())
letters = list(input().split())
visited = [False] * c
letters.sort()

def is_valid(path):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    v_count = sum(1 for ch in path if ch in vowels)
    c_count = len(path) - v_count
    return v_count >= 1 and c_count >= 2

def dfs(chars, path, visited):
    if len(path) == l and is_valid(path):
        print(''.join(path))
        return
    
    for i in range(c):
        if not visited[i]:
            if not path or chars[i] > path[-1]:
                visited[i] = True
                dfs(chars, path + [chars[i]], visited)
                visited[i] = False

dfs(letters, [], visited)
