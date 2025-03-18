const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')


input = input.map(row => row.split(' ').map(Number))
//console.log(input)
let sum  =0;

for(let i=0; i< input.length; i++){
    for(let j=0; j<=i; j++){
        sum += input[i][j]   
    }
}

console.log(sum)

