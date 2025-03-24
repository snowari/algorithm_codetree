const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

const str = input[0]
const subStr = input[1]

let cnt =0;

for(let i =0 ; i< str.length -1 ; i++){
    if(str[i]===subStr[0]&& str[i+1]===subStr[1]){
        cnt++;
    }
}

console.log(cnt)