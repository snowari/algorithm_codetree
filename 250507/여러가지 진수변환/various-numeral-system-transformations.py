N, B = map(int, input().split())

def dec_to_base(n, base):
    if base == 8:
        return oct(n)[2:]
    elif base ==4:
        digit =""
        while n>0 :
            digit = str(n%4) +digit
            n//=4
        return digit

print(dec_to_base(N,B))
