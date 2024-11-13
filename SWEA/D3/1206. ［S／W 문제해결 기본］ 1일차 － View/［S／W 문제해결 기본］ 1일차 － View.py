for t in range(10):
    N = int(input())
    apts = list(map(int, input().split()))
    answer = 0

    for i in range(2, N-2):
        cur_apt = apts[i]
        left = max(apts[i-2], apts[i-1])
        right = max(apts[i+1], apts[i+2])

        if left < cur_apt and right < cur_apt:
            answer += (cur_apt - max(left, right))

    print(f'#{t+1} {answer}')