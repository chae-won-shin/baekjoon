docs = input()
words = input()

start, end = 0, len(words)
count = 0
length = len(words)

while end <= len(docs):
    temp = docs[start:end]
    if temp == words: 
        count += 1
        start += length
        end += length
    else:
        start += 1
        end += 1

print(count)
