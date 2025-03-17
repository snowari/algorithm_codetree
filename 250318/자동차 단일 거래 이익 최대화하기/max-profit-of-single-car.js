const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n');

let years = Number(input[0])
let profit = input[1].split(' ').map(Number)


let max=0;

for(let i = 0; i<years; i++){
    for(let j=i+1;j<years; j++){
        if(profit[j]-profit[i]> max){
            max = profit[j]-profit[i]
        }
    }
}

console.log(max)


