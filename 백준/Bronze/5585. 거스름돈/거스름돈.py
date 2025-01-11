pay = int(input())
n = 1000 - pay
count = 0

coin_types = [500, 100, 50, 10, 5, 1]

for coin in coin_types:
    count += n // coin
    n %= coin

print(count)
        