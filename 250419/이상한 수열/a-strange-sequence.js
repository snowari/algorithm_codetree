const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
const solution = (n) => {
    if(n===1){
        return 1;
    }else if(n===2){
        return 2
    }
    return solution(Math.floor(n/3)) + solution(n-1)
}

console.log(solution(n))