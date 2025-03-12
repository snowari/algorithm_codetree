const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n');

let answer=[];
answer[0]=1;
answer[1]= Number(input[0])


for(let i=1 ;answer[i]<=100;i++){
    answer[i+1]=(answer[i-1]+ answer[i]);
}

console.log(answer.join(' '))