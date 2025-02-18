-- RERE 아이템의 다음 업그레이드 아이템의 정보 출력, 아이템 ID 기준 내림차순
SELECT ITEM_ID, ITEM_NAME, RARITY
FROM ITEM_INFO 
WHERE ITEM_ID IN (SELECT B.ITEM_ID 
                 FROM ITEM_INFO A, ITEM_TREE B
                  WHERE A.ITEM_ID = B.PARENT_ITEM_ID AND A.RARITY = 'RARE'
                 )
ORDER BY ITEM_ID DESC