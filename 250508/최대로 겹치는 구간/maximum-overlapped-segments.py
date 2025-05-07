n = int(input())
segments = [tuple(map(int, input().split())) for _ in range(n)]

# Please write your code here.

points = []
for a,b in segments:
    points.append((a,1))
    points.append((b,-1))

points.sort()
cnt = 0
answer = 0
for _, end in points:
    cnt += end
    answer = max(answer,cnt)

print(answer)



