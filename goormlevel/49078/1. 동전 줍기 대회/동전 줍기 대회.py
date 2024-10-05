# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean

# 동전n개: 1-n번까지 번호부여
# n개 중 원하는 만큼 동전 줍기
# 동전 번호 반드시 연속 & 줍지 않을 수 있음
# 줍기를 마치면 주운 동전 합만큼 상금, 음수면 상금 없음
# 최대 상금 구해라

#10 -5 3 2 4 -7
# 10
# 10 -5 -> 
# 음수 나오면 -> 일단 음수 나오기 직전 값(prev) 저장
# if 두개 더했을 때 양수 -> 계속/ 음수거나 0 -> 버리고 다음꺼부터
# 끝까지 더했을 때 prev, 끝까지 더한 값 중 큰 것 선택

# -6 -9 -7 8 3 -5 -2 -3 -7 0
# 8(cur)
# 8+3
# 8+3 -5 -> prev=11 , 8+3-5= 6 양수
# 6 -2 (prev=11,6 중 큰 것 -> 11) 6-2 = 4 양수
# 4 -3 (prev= 11,4 중 큰 것 -> 11) 4-3 = 1 양수
# 0 (11과 0 중 큰 것) -> 11

n = int(input().strip())
numList = list(map(int, input().strip().split(" ")))

cur = 0
prev = 0

for num in numList:
	if num <= 0:
		prev = max(prev, cur)
	cur += num
	if cur <= 0:
		cur = 0
		
	if cur>prev:
		prev = cur
	
print(prev)

















