const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]
let c = input[1]


let cnt=0
for(let i of str){
    if(i ===c){
        cnt++;
    }
}

console.log(cnt)