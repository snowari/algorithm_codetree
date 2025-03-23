const fs = require('fs')
let input  = fs.readFileSync(0).toString().trim()

let even = []

for (let i=0; i<input.length ; i++){
    if(i%2!==0){
        even.push(input[i])
    }
}

console.log(even.reverse().join(''))
