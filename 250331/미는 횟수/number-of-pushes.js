const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n = 0

let str_a = input[0]
let str_b = input[1]

while (str_a != str_b){
    str_a = str_a.slice(-1)+str_a.slice(0,(str_a.length)-1)
   // console.log(str_a)
   if(n==str_a.length){
    n=-1
    break;
   }
    n++;
}

console.log(n)