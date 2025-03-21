const fs = require('fs')
let input  = fs.readFileSync(0).toString().trim().split('\n')


let str = ""

for(let row of input){
    if(row!==' '){
        str+= row
    }
}
let answer=""
for(let c of str){
    if(c!==' '){
        answer+= c
    }
}

console.log(answer)