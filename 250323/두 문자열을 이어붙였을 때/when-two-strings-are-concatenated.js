const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let str1 = input[0]
let str2 = input[1]

let str12 = str1+str2
let str21 = str2+str1

if(str12===str21){
    console.log("true")
}else
    console.log("false")