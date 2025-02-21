SELECT COUNT(ID) AS FISH_COUNT, 
    MAX(CASE WHEN LENGTH <= 10 THEN 10 ELSE LENGTH END) AS MAX_LENGTH, FISH_TYPE
FROM FISH_INFO
GROUP BY FISH_TYPE
HAVING AVG(LENGTH) >= 33
ORDER BY FISH_TYPE