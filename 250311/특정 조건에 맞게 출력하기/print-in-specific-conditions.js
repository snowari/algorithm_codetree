const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);



let answer = []

for (let elem of input){
    if(elem != 0){
        answer.push(elem)
    }
}

//console.log(answer)

let result = answer.map(num => num %2===0? num/2: num+3 ).join(' ')

console.log(result)