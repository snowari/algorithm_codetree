const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.
//console.log(n)


let digits = []
while(true){
    if(n<2){
        digits.push(n)
        break;
    }
    digits.push(n%2)
    n = Math.floor(n/2)
}

digits.reverse()
console.log(digits.join(''))
