n, m = map(int, input().split())
trees = list(map(int, input().split()))

def bin_search(start,end):
    res = 0

    while start <= end:
        total = 0
        mid = (start+end) // 2
        for tree in trees:
            if tree > mid:
                total += (tree - mid)
        
        if total < m:
            end = mid - 1
        else:
            res = mid
            start = mid + 1
    
    return res

print(bin_search(0, max(trees)))
