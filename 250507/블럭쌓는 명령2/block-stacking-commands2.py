n, k = map(int, input().split())
commands = [tuple(map(int, input().split())) for _ in range(k)]

# Please write your code here.
#명령수 k 블럭길이  n 
arr= [0] * n

for n in commands:
    a,b =n


    for i in range(a-1, b):
        arr[i] +=1


print(max(arr))






