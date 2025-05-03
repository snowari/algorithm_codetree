const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
const days = [31,28,31,30,31,30,31,31,30,31,30,31]

let cnt=0
let daySum1
let daySum2

for(let i=0; i<m1-1 ; i++){
    cnt += days[i]
  
}
cnt += d1
daySum1 = cnt
cnt=0

for(let i=0; i<m2-1 ; i++){
    cnt += days[i]
   
}
cnt += d2
daySum2 = cnt

let answer

if (daySum1<daySum2){
    answer = (daySum1-daySum2)%7
   
    answer=day[answer]
    
}else{
    answer = (daySum2-daySum1)%7
    answer = day[(answer+7)%7]
}

console.log(answer)





