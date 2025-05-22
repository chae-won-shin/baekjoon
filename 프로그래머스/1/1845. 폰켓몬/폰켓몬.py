def solution(nums):
    nums_set = set(nums)
    
    if len(nums) // 2 < len(nums_set):
        return len(nums) // 2
    else:
        return len(nums_set)
    