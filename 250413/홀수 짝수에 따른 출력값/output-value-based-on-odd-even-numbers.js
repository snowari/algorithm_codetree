const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function solution(n){
    if(n<=0){
        return 0
    }
    return n + solution(n-2)

    
}

console.log(solution(n))