def is_palindrome(arr):
    n = len(arr)
    for i in range(n//2):
        if arr[i] != arr[n-i-1]:
            return False
    
    return True

T = int(input())

for t in range(T):
    s = input()
    n = len(s)
    answer = 'YES'

    if is_palindrome(s) == False:
        answer = 'NO'

    if is_palindrome(s[0:(n-1)//2]) == False:
        answer = 'NO'

    if is_palindrome(s[-(n-1)//2:]) == False:
        answer = 'NO'

    print(f'#{t+1} {answer}')
