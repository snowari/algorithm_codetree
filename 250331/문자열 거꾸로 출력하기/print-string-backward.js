const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

//console.log(input)
 
let answer =[]
for(let str of input){
    if(str==='END'){
        break
    }else{
        let tmp = str.split('')
        tmp = tmp.reverse().join('')
        answer.push(tmp)
    }
}

console.log(answer.join('\n'))