a, b = map(int, input().split())
n = input()


decimal = int(n,a)

def dec_to_base(n, base) :
    digits = "0123456789"
    result = ""
    while(n>0):
        result = digits[n%base] + result
        n//=base
    return result

print(dec_to_base(decimal,b))

    




# Please write your code here.