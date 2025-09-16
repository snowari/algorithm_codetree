const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.
let max = 0
for(let i=x; i<=y; i++ ){
    let num = i
    let acc =0
    while(num>0){
        acc += num%10
        num = Math.floor(num/10)
    }
    max = Math.max(max, acc)
}

console.log(max)