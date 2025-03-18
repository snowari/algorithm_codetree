const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')
input = input.map(row => row.split(' ').map(Number))


let rowAvg=[]
let colAvg=[];
let totalAvg=0;

let sum=0;
for(let i =0 ; i< input.length ; i++){
    
    let arr = input[i]
    arr.map(num => sum+= num)
    totalAvg += sum
    rowAvg.push( (sum / 4).toFixed(1))
    sum=0
}

sum=0;

for(let j =0 ; j< 4 ; j++){
    for(let i=0; i<input.length ; i++){
        sum += input[i][j]
    }
    colAvg.push( ( sum/2).toFixed(1))
    sum=0;
    
}






console.log(rowAvg.join(' '))
console.log(colAvg.join(' '))
console.log( (totalAvg / 8).toFixed(1))


