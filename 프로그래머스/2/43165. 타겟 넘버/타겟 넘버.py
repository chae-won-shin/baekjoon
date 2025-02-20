def solution(numbers, target):
    res = dfs(numbers, 0, 0, target)
    return res

def dfs(numbers, depth, value, target):
    if depth == len(numbers):
        return 1 if value == target else 0
    
    else :
        return (dfs(numbers, depth+1, value + numbers[depth], target) +
                dfs(numbers, depth+1, value - numbers[depth], target))