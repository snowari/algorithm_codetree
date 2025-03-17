const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0])
//console.log(input)
let arr = input[1].split(' ').map(Number)

let max = 0

let cnt = []

for (let num of arr){
    cnt[num]=(cnt[num] || 0) +1;
    
}

//console.log(cnt)
for(let num of arr){
    if(cnt[num]===1&& num>max){
        max=num;
    }
}


console.log(max===0 ? "-1": max)

