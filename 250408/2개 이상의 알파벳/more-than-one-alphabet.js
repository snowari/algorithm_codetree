const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function solution(str){
    let cnt =0
    for(let i=0; i<str.length-1; i++){
        if(str[i] !== str[i+1])
            cnt++
    }

    return cnt >=2 ? "Yes" : "No"
}

console.log(solution(A))