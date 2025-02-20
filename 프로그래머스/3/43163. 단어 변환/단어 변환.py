from collections import deque

def bfs(begin, target, words):
    queue = deque()
    queue.append((begin, 0))
    
    while queue:
        cur, level = queue.popleft()
        
        if cur == target:
            return level
        
        for word in words:
            count = 0
            for i in range(len(cur)):
                if cur[i] != word[i]:
                    count += 1
            if count == 1:
                queue.append((word, level+1))
        

def solution(begin, target, words):
    if target not in words:
        return 0
    return bfs(begin, target, words)
    
    
    