const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ');

let answer=[];
let multiple = input[0];

let cnt=0;

for(let i=1 ;cnt<2 ;i++){
    answer.push(multiple*i)
    if((multiple*i)%5===0){
        cnt++;
        
    }
}

console.log(answer.map(elem => Number(elem)).join(' '))