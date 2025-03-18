const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')


for(let i = 0 ; i< input.length; i++){
    arr = input[i].split(' ').map(elem => elem.toUpperCase())
    console.log(arr.join(' '))
}