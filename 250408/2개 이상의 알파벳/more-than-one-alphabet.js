const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function solution(str){
    let cnt =0
    for(let i=0; i<str.length-1; i= i+2){
        if(str[i] !== str[i+1])
            cnt = cnt +2
    }

    return cnt >=2 ? "Yes" : "No"
}

console.log(solution(A))

