const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()


let i=0
while(i<=input.length){
    console.log(input) 
    input = input.slice(-1) + input.slice(0,-1)
    i++
}