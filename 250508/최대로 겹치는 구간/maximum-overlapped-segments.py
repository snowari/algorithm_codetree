n = int(input())
segments = [tuple(map(int, input().split())) for _ in range(n)]

# Please write your code here.

segments.sort(key=lambda x:x[1],reverse=True)
#print(segments)

answer = 0
for i in range(len(segments)-1):
    flag_b =segments[i][1]
    next_a =segments[i+1][0]
    if flag_b > next_a :
        answer += 1
    
answer += 1


print(answer)