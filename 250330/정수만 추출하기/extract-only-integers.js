const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let num1 = input[0]
let num2 = input[1]
/*
let t = '9' //48 57
console.log(t.charCodeAt(0))
*/


let answer = ''
for(let c of num1){
    //console.log(c)
    if(c<'0' || c>'9'){
        break;
    }else{
        answer += c
        
    }
}

answer = Number(answer)

let tmp='';
for(let c of num2){
    if(c<'0' || c>'9'){
        break;
    }else{
        tmp += c
        
    }
}

answer = answer + Number(tmp)

console.log(answer)
