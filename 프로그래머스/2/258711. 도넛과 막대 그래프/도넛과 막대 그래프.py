def solution(edges):
    edges_1d = [item for sublist in edges for item in sublist]
    n = max(edges_1d)
    
    income = [0] * (n+1)
    outcome = [0] * (n+1)
    for edge in edges:
        a, b = edge
        outcome[a] += 1
        income[b] += 1
        
    answer = [0] * 4
    for i in range(1, n+1):
        if outcome[i] >= 2 and income[i] == 0:
            answer[0] = i
        if outcome[i] == 0 and income[i] >= 1:
            answer[2] += 1
        if outcome[i] >= 2 and income[i] >= 2:
            answer[3] += 1  
    answer[1] = outcome[answer[0]] - (answer[2] + answer[3])
        
    return answer
