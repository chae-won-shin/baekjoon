import sys

card_list = [0]*20000002

n = int(sys.stdin.readline().rstrip())
cards = list(map(int, sys.stdin.readline().rstrip().split()))
for card in cards:
    card_list[card] += 1

m = int(sys.stdin.readline().rstrip())
seek = list(map(int, sys.stdin.readline().rstrip().split()))

for item in seek:
    print(card_list[item], end=' ')
        