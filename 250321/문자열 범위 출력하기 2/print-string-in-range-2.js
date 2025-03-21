const fs = require('fs')
let input =  fs.readFileSync(0).toString().trim().split('\n')

const str = input[0]
const n = Number(input[1])


if(n>=str.length){
    console.log(str.reverse())
}else{
    const sliceStr = str.slice(-n);
    console.log(sliceStr.split('').reverse().join(''))
}

