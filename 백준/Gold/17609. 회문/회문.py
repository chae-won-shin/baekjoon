n = int(input())

def is_real_palindrome(s, left, right):
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

def is_palindrome(sentence):
    left, right = 0, len(sentence)-1

    while left < right:
        if sentence[left] == sentence[right]:
            left += 1
            right -= 1
        else:
            check1 = is_real_palindrome(sentence, left+1, right)
            check2 = is_real_palindrome(sentence, left, right-1)
        
            if check1 or check2:
                return 1
            else:
                return 2

    return 0
            
for _ in range(n):
    sentence = input()
    print(is_palindrome(sentence))
