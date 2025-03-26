const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()


let str = ''
for(let c of input){
    if( c=== 'e'){
        let idx = input.indexOf(c)
        str = input.slice(0,idx) + input.slice(idx+1)
    }

}

console.log(str)
