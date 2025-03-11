const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let answer=[10]
 answer[0]= Number(input[0])
 answer[1] = Number(input[1])


for(i=2; i<10 ; i++){
    answer[i]=answer[i-1]+answer[i-2]
    //console.log(answer[i])
}

console.log(answer.map(num => num%10).join(' '))