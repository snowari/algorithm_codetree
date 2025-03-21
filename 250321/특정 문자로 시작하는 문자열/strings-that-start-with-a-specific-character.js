const fs = require('fs')

let input  = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const c = input.pop()

input = input.slice(1)


let cnt=0;
let len = 0;
for(let str of input){
    if(str[0]===c){
        cnt++;
        len += str.length 
    }
}

let avg = (len/cnt).toFixed(2)


console.log(cnt, avg)

