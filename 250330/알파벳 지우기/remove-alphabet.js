const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const str1 = input[0]
const str2 = input[1]

let num1 = ''
for(let c of str1){
    if(c<='9' && c>='0'){
        num1 += c
    }
}
let num2 = ''
for(let c of str2){
    if(c<='9' && c>='0'){
        num2 += c
    }
}

num1 = Number(num1)
num2 = Number(num2)

console.log(num1+num2)

