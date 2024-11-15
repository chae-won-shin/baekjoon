code_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

T = int(input())

for t in range(T):
    s = list(map(str, input().split()))
    code_arr = []
    decoded_str = []

    for w in s:
        word = list(w)
        for e in word:
            code_arr.append(format(code_list.index(e), '06b'))

    code_arr = ''.join(code_arr)
    for i in range(0, len(code_arr), 8):
        decoded_str.append(chr(int(code_arr[i:i+8], 2)))

    print(f'#{t+1} {"".join(decoded_str)}')
    