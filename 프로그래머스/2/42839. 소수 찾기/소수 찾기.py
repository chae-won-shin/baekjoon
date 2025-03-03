from itertools import permutations
import math

def is_prime(num):
    if num < 2:
        return False
    
    for i in range(2, int(math.sqrt(num))+1):
        if num % i == 0:
            return False
    return True

def solution(numbers):
    answer = set()
    
    for r in range(1, len(numbers) + 1):
        for perm in permutations(numbers, r):
            num = int(''.join(perm))
            if is_prime(num):
                answer.add(num)

    return len(answer)



