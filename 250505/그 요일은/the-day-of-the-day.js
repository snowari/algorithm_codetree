const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

const day = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
const days = [31,29,31,30,31,30,31,31,30,31,30,31]
// Please Write your code here.

let daysum1=0
for(let i=m1-2; i>=0 ; i--){
    daysum1+=days[i]
}
daysum1+=d1
let daysum2=0
for(let i=m2-2; i>=0 ; i--){
    daysum2+=days[i]
}
daysum2+=d2
//console.log(daysum1, daysum2)

let tmp = daysum2-daysum1
let answer = Math.floor(tmp/7)
tmp = tmp%7
if(day[tmp]===A)
    answer++

console.log(answer)



