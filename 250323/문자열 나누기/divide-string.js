const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
let numbers = input[1].trim().split(' ')

let str = ""
numbers.map(n=> str = str+n)


let answer = []
for(let i=0; i<str.length; i+=5){
    answer.push(str.slice(i,i+5))    
}

console.log(answer.join('\n'))