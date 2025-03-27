const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')



let sub = Math.abs(input[0].charCodeAt(0)-input[1].charCodeAt(0))
let add =input[0].charCodeAt(0)+input[1].charCodeAt(0)

console.log(add, sub)