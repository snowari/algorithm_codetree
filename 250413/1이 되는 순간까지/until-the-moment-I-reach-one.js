const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let cnt = -1
function solution(n){
    cnt ++;
    if(n ===1){
        return cnt
    }else if(n%2 ===0){
        return solution(Math.floor(n/2))
    }else{
        return solution(Math.floor(n/3))
    }
}

console.log(solution(n))