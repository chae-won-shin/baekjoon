roman1 = input()
roman2 = input()
romans = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
roman_minus = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
arabs = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC',
        50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'}

def roman_to_arab(roman):
    num = 0
    i = 0
    n = len(roman)

    while i < n:
        if i+1 < n:
            if roman[i:i+2] in roman_minus:
                num += roman_minus[roman[i:i+2]]
                i += 2
                continue
        if roman[i] in romans:
            num += romans[roman[i]]
            i += 1
    
    return num

def arab_to_roman(arab): 
    answer = ""
    
    while arab > 0:
        for key, value in arabs.items():
            while arab >= key:
                answer += value
                arab -= key
            
    return answer

num1 = roman_to_arab(roman1)
num2 = roman_to_arab(roman2)
result = num1 + num2
answer = arab_to_roman(result)

print(result)
print(answer)
