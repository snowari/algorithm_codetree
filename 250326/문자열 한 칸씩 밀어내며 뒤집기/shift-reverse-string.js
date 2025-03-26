const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[0].split(' ')
const n = str.slice(-1)
str = str.slice(0,-1).join('')

const query = input.slice(1).map(Number)

//console.log(str)
let temp = str.split('')
for (let q of query){
   
    if(q === 1){
        temp = temp.slice(1).concat( temp.slice(0,1))
        console.log(temp.join(''))
    }else if(q === 2){
        temp = temp.slice(-1).concat(temp.slice(0,-1))
        console.log(temp.join(''))
    }else{
        temp = temp.reverse()
        console.log(temp.join(''))
    }
}
