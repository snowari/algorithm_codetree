const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);


for (let elem of input){
    if(elem ===0){
        input.pop();
    }
}

let result = input.map(num => num %2===0? num/2: num+3 ).join(' ')

console.log(result)