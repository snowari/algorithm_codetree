const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.
function solution(a){
    if(a===0){
        return
    }
    process.stdout.write(a+" ")
    solution(a-1)
    process.stdout.write(a+" ")
}

solution(n)