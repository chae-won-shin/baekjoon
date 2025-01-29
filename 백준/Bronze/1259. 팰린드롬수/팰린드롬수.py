while True:
    palindrome = input()
    palindrome_reverse = ''.join(reversed(palindrome))

    if palindrome == '0':
        break

    if palindrome == palindrome_reverse:
        print('yes')
    else:
        print('no')