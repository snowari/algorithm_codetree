const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.


const solution=(n)=>{
    if(n===1){
        return 2
    }
    if (n===2){
        return 4
    }
    return ((solution(n-1) * solution(n-2))%100)
}

console.log(solution(n))