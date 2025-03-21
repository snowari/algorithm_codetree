const str1 = "apple"
const str2 = "banana"
const str3 = "grape"
const str4 = "blueberry"
const str5 = "orange"

const strArray =  [ "apple", "banana", 'grape', 'blueberry', 'orange' ]


const fs = require('fs')
let input = fs.readFileSync(0).toString().trim();

let cnt = 0
for(let str of strArray){
    if(str[2]===input|| str[3]===input){
        cnt++;
        console.log(str)
    }
}
console.log(cnt)