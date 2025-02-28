from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    temp = []
    
    for c in course:
        comb_list = []
        
        for order in orders:
            comb_list += combinations(sorted(order), c)
            
        counter = Counter(comb_list).most_common()
        answer += [c[0] for c in counter if (c[1] == counter[0][1] and c[1] > 1)]

    answer = [''.join(e) for e in sorted(answer)]
    return answer