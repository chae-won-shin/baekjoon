from itertools import combinations

l, c = map(int, input().split())
letters = sorted(input().split())

def is_valid(password):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    v_count = sum(1 for ch in password if ch in vowels)
    c_count = len(password) - v_count
    return v_count >= 1 and c_count >= 2

for ans in combinations(letters, l):
    if is_valid(ans):
        print(''.join(ans))
