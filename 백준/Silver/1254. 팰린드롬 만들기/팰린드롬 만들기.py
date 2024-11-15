def is_palindrome(s):
    n = len(s)
    for i in range(n//2 + 1):
        if s[i] != s[n-i-1]:
            return False
    return True

def make(s):
    n = len(s)
    for i in range(n):
        if is_palindrome(s[i:]):
            return i + n
    return n * 2

s = input()
print(make(s))