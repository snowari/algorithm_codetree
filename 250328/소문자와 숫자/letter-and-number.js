const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()


let answer = ''
for(let c of input){
    if(c.charCodeAt(0)>=65 && c.charCodeAt(0) <= 90){
        answer += c.toLowerCase()
    }else if(c.charCodeAt(0)>=97 && c.charCodeAt(0)<= 122){
        answer += c
    }else if(c.charCodeAt(0)>=48 && c.charCodeAt(0)<= 57)
        answer += c
}

console.log(answer)
