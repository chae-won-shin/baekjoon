import re

def solution(new_id):
    answer = new_id.lower()
    answer = re.sub(r'[^a-z0-9-_.]', '', answer)
    answer = re.sub(r'\.{2,}', '.', answer)
    answer = re.sub(r'^\.+|\.+$', '', answer)
    if len(answer) == 0:
        answer = 'a'
    if len(answer) >= 16:
        answer = answer[:15]
    answer = re.sub(r'\.+$', '', answer)
    if len(answer) <= 2:
        while len(answer) != 3:
            answer += answer[len(answer)-1]
            
    return answer
