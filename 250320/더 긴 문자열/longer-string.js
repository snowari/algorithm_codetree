const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let a = input[0].length
let b = input[1].length

if(a>b){
    console.log(input[0],a)
}else if(b>a){
    console.log(input[1],b)
}else{
    console.log("same")
}