const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let c = input.pop()


let cnt=0
for(let str of input){
    if(str[(str.length)-1]===c){
        console.log(str)
        cnt++;
    }
    
}
if(cnt===0){
        console.log("None")
    }