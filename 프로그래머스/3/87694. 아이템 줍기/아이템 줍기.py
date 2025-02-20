from collections import deque 

def bfs(graph, visited, cx, cy, ix, iy):
    queue = deque()
    queue.append((cx, cy))
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while queue:
        x, y = queue.popleft()
        
        if x == ix and y == iy:
            return visited[x][y]
        
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            
            if graph[nx][ny] == 1 and visited[nx][ny] == 1:
                visited[nx][ny] += visited[x][y]
                queue.append((nx, ny))

def solution(rectangle, characterX, characterY, itemX, itemY):  
    graph = [[-1]*102 for _ in range(102)]
    visited = [[1]*102 for _ in range(102)]
    
    for element in rectangle:
        x1, y1, x2, y2 = map(lambda x: x*2, element)
        for i in range(x1, x2+1):
            for j in range(y1, y2+1):
                if x1 < i < x2 and y1 < j < y2:
                    graph[i][j] = 0
                elif graph[i][j] != 0:
                    graph[i][j] = 1
                    
    answer = bfs(graph, visited, characterX*2, characterY*2, itemX*2, itemY*2)
    return answer//2