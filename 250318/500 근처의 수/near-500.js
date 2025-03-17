const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)


input.sort((a, b)=> a-b)


let split;
//let min;
//et max;

//console.log(input)

for(let i=0; i<input.length; i++){
    if(input[i]>=500){
        //console.log(input[i]) 
        split = i
        break;
    }
}

console.log(input[split-1], input[split])
