const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()
let answer = ''
for(let c of input){
    let a_num = c.charCodeAt(0)
    if(a_num>= 97 && a_num<=122){
        answer += c.toUpperCase()
    }else if(a_num >= 65 && a_num <= 90){
        answer += c.toLowerCase()
    }
}

console.log(answer)