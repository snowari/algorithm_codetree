const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please write your code here.
function factorial(n){
    if(n===1 || n===0){
        return 1
    }
    return n * factorial(n-1)

}

console.log(factorial(n))