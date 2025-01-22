n = int(input())
arr = list(map(int, input().split()))
arr.sort()

m = int(input())
seek = list(map(int, input().split()))

def bin_search(target, start, end):
    while start <= end:
        mid = (start+end)//2

        if target == arr[mid]:
            return 1
        elif target < arr[mid]:
            end = mid -1
        else:
            start = mid + 1

    return 0

for item in seek:
    print(bin_search(item, 0, n-1))
