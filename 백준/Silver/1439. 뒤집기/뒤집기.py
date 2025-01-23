S = input()

arr_0 = S.split('1')
cnt_0 = 0
for item in arr_0:
    if item != '':
        cnt_0 += 1

arr_1 = S.split('0')
cnt_1 = 0
for item in arr_1:
    if item != '':
        cnt_1 += 1

print(min(cnt_0, cnt_1))
