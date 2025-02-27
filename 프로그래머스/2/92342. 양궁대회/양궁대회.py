def solution(n, info):
    global max_gap, answer
    
    answer = [-1]
    max_gap = 0
    score = [0] * 11
    
    def compare(score):
        apeach = 0
        lion = 0
        
        for i in range(11):
            if info[i] > 0 or score[i] > 0:
                if info[i] >= score[i]:
                    apeach += (10 - i)
                else:
                    lion += (10 - i)
                    
        return (lion > apeach, abs(lion - apeach))
      
    def back(depth, count):
        global max_gap, answer
        if depth == 11 or count == 0:
            is_winner, gap = compare(score)
            
            if is_winner:
                if count >= 0:
                    score[10] = count
                    
                if max_gap < gap:
                    max_gap = gap
                    answer = score.copy()
                    
                if max_gap == gap:
                    max_answer, max_score = 0, 0
                    for i in range(11):
                        if answer[i] > 0:
                            max_answer = i
                        if score[i] > 0:
                            max_score = i
                    if max_score > max_answer:
                        answer = score.copy()    
            return
        
        if count > info[depth]:
            score[depth] = info[depth] + 1
            back(depth + 1, count - (info[depth] + 1))
            score[depth] = 0
            
        back(depth + 1, count)
    
    back(0, n)
    return answer