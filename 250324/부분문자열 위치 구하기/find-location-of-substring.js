const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0]
let subStr = input[1];

console.log(str.indexOf(subStr))


