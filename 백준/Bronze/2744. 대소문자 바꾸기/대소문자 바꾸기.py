words = input()
ans = ''

for word in words:
    if word.isupper():
        ans += word.lower()
    elif word.islower():
        ans += word.upper()

print(ans)