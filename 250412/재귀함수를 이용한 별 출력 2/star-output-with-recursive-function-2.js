const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function solution(a){
    if(a===0){
        return
    }
    for(let i=a; i>0; i--){
        process.stdout.write("* ")
    }
    console.log()
    solution(a-1)
    for(let i=0; i<a; i++){
        process.stdout.write("* ")
    }
    console.log()
}

solution(n)