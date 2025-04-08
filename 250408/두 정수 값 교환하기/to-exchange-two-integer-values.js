const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

function swap(a,b){
    let temp = []
    temp[0] = b
    temp[1] =a
    return temp
}


console.log(swap(n,m).join(' '))

