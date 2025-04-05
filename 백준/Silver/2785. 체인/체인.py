n = int(input())
arr = list(map(int, input().split()))

def solution(n, chains):
    chains.sort()

    count = n
    tied = 1

    for chain in chains:
        if tied + chain >= count:
            break
        else:
            tied += chain
            count -= 1

    return count - 1

print(solution(n, arr))
