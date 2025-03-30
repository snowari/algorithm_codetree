const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()
let answer = 0;
for(let c of input){
    answer+= Number(c)
}

console.log(answer)