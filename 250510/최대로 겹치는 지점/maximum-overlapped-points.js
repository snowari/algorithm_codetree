const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}
const answer=Array(101).fill(0)
//console.log(answer)

for(let seg of segments){
    let start = seg[0]
    let end = seg[1]
    for(let i =start; i<end+1 ; i++){
        answer[i] ++;
    }
}
let max = Math.max(...answer)
console.log(max)
//console.log(segments)



// Please Write your code here.