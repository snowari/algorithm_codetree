const fs = require('fs')
let input =fs.readFileSync(0).toString().trim().split('\n')

let str = input[0].split('')
let query = input[1].split('')

for(let q of query){
    if(q==='L'){
         str = str.slice(1).concat(str[0])
         //console.log(str.join(''))
    }else{
        str = (str.slice(-1)).concat(str.slice(0,-1))
       // console.log(str.join(''))
    }
}

console.log(str.join(''))