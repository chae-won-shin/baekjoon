n = int(input())
arr = list(map(int, input().split()))
m = int(input())

def bin_search(start, end):
    res = 0

    while start <= end:
        total = 0
        mid = (start+end) // 2

        for i in arr:
            if i > mid:
                total += mid
            else:
                total += i
        
        if total > m:
            end = mid - 1
        else:
            res = mid
            start = mid + 1

    return res

print(bin_search(0, max(arr)))
