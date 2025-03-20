const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')


let str1 = input[0].length
let str2 = input[1].length
let str3 = input[2].length

console.log(Math.max(str1,str2,str3)-Math.min(str1, str2, str3))

