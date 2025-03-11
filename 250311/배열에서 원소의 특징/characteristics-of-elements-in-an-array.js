const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')



let index=0
for(let i=1; i<input.length; i++){
    if(Number(input[i])%3===0){
        index=i;
        break;
    }
}

console.log(input[index-1])
